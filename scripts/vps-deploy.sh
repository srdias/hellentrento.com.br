#!/bin/bash

# Configuration
REMOTE_DIR="/opt/hellentrento"
HOST_PORT="5182"

# Check required environment variables (expected from GitHub Secrets)
if [ -z "$DEPLOY_SSH_HOST" ] || [ -z "$DEPLOY_SSH_USER" ] || [ -z "$DEPLOY_SSH_PRIVATE_KEY" ]; then
    echo "Error: DEPLOY_SSH_HOST, DEPLOY_SSH_USER, and DEPLOY_SSH_PRIVATE_KEY must be set."
    exit 1
fi

SSH_PORT=${DEPLOY_SSH_PORT:-22}

echo "--- Starting Deployment to $DEPLOY_SSH_HOST ---"

# 1. Setup SSH Key
echo "Setting up SSH key..."
mkdir -p ~/.ssh
echo "$DEPLOY_SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa

# Simple check/add to known_hosts to avoid interactive prompt
ssh-keyscan -p "$SSH_PORT" -H "$DEPLOY_SSH_HOST" >> ~/.ssh/known_hosts 2>/dev/null

# 2. Prepare Remote Directory and Synchronize
echo "Ensuring remote directory $REMOTE_DIR exists..."
ssh -p "$SSH_PORT" -i ~/.ssh/id_rsa "$DEPLOY_SSH_USER@$DEPLOY_SSH_HOST" "mkdir -p $REMOTE_DIR"

echo "Synchronizing files to $REMOTE_DIR..."
rsync -avz --delete \
    -e "ssh -p $SSH_PORT -i ~/.ssh/id_rsa" \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.github' \
    --exclude 'dist' \
    ./ "$DEPLOY_SSH_USER@$DEPLOY_SSH_HOST:$REMOTE_DIR"

# 3. Handle .env (if provided as Base64)
if [ -n "$DEPLOY_ENV_BASE64" ]; then
    echo "Updating .env file from DEPLOY_ENV_BASE64..."
    echo "$DEPLOY_ENV_BASE64" | base64 -d > .tmp_env
    scp -P "$SSH_PORT" -i ~/.ssh/id_rsa .tmp_env "$DEPLOY_SSH_USER@$DEPLOY_SSH_HOST:$REMOTE_DIR/.env"
    rm .tmp_env
fi

# 4. Execute Docker Compose Build/Up via SSH
echo "Running docker compose on VPS..."
ssh -p "$SSH_PORT" -i ~/.ssh/id_rsa "$DEPLOY_SSH_USER@$DEPLOY_SSH_HOST" << EOF
    cd $REMOTE_DIR
    # Build and restart only this project's containers
    # Using project name 'hellentrento' for absolute isolation
    # Force rebuild without cache once to ensure clean base path
    docker compose -p hellentrento build --no-cache
    docker compose -p hellentrento up -d --remove-orphans
    echo "Deployment successful! Site should be available on port $HOST_PORT (via localhost on VPS)."
EOF

echo "--- Deployment Finished ---"
