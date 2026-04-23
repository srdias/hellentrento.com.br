# 🌐 Hellen Trento - Website Profissional

Este é o repositório oficial do website da psicóloga **Hellen Trento**, desenvolvido pela **Equipe Tony (Agência Digital)**. O projeto foca em alta conversão, autoridade e posicionamento estratégico para profissionais da área da saúde.

## 🚀 Tecnologias Utilizadas
- **Core:** React.js + Vite
- **Styling:** Vanilla CSS (Design Premium & Customizado)
- **Otimização:** GEO (Generative Engine Optimization), SEO e AEO.

## 👥 Equipe do Projeto
O desenvolvimento foi orquestrado pelo **Tony (Diretor)** e executado pelos especialistas:
- **Paulo:** Designer & UX (Estética Premium)
- **Jorge:** Copywriting (Narrativa Terapêutica)
- **João:** Front-End Developer (Performance & Animações)
- **Sobrau:** Otimização para IA (SEO/GEO/LLMO)

## 📁 Estrutura de Conhecimento
O repositório contém uma central de inteligência no diretório `/AGENCY_KNOWLEDGE`, detalhando as skills e padrões utilizados:
- [Branding & Identidade Visual](./AGENCY_KNOWLEDGE/SKILL_VISUAL_IDENTITY.md)
- [Copywriting para Saúde](./AGENCY_KNOWLEDGE/SKILL_COPYWRITING_THERAPY.md)
- [Padrões Front-End](./AGENCY_KNOWLEDGE/SKILL_FRONTEND_PATTERNS.md)
- [Otimizações de Visibilidade](./AGENCY_KNOWLEDGE/SKILL_OPTIMIZATION_GEO.md)

## 🛠 Como Rodar o Projeto
1. Clone este repositório.
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`

---
*Desenvolvido com foco em transformação e bem-estar emocional.*

## 🚢 Deploy (Produção na VPS)

Este projeto está configurado para deploy contínuo via **GitHub Actions** em uma VPS Linux dedicada.

### ⚙️ Configuração da Porta
- A aplicação utiliza a porta fixa **5182** no host da VPS.
- O mapeamento Docker é `5182:80`.

### 🔐 Secrets Necessários (GitHub Actions)
Para que o workflow funcione, configure os seguintes segredos no repositório:
- `DEPLOY_SSH_HOST`: IP ou hostname do servidor.
- `DEPLOY_SSH_USER`: Usuário com permissão para Docker/Sudo.
- `DEPLOY_SSH_PRIVATE_KEY`: Chave SSH privada (RSA/ED25519).
- `DEPLOY_SSH_PORT`: Porta SSH (padrão 22).
- `DEPLOY_ENV_BASE64`: (Opcional) Conteúdo do arquivo `.env` codificado em base64.

### 🌐 Configuração do Reverse Proxy (Caddy/Nginx)
O administrador da VPS deve configurar o proxy reverso para apontar o domínio para o serviço local:

1. **DNS**: Apontar `hellentrento.com.br` e `www` para o IP da VPS.
2. **Reverse Proxy Configuration (ex: Caddy)**:
   ```caddy
   hellentrento.com.br, www.hellentrento.com.br {
       reverse_proxy 127.0.0.1:5182
   }
   ```

### 🛠 Scripts de Deploy
- `Dockerfile`: Multi-stage build (Node -> Nginx).
- `docker-compose.yml`: Define o serviço `hellentrento-app`.
- `scripts/vps-deploy.sh`: Script de automação que sincroniza os arquivos via `rsync` e reinicia o container.
