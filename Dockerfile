# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Default nginx configuration is fine for a simple SPA, 
# but if we need routing (React Router), we'd need a custom config.
# Since this seems like a landing page, default should be okay.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
