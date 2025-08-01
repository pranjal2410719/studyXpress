# StudyXpress Deployment Guide

This guide covers various deployment options for the StudyXpress application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [Docker](#docker)
  - [Traditional VPS](#traditional-vps)
- [CI/CD Setup](#cicd-setup)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher (or pnpm/yarn)
- Git
- A GitHub account (for CI/CD)

## Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/pranjal2410719/studyXpress.git
   cd studyXpress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Test locally**
   ```bash
   npm run dev
   ```

## Deployment Platforms

### Vercel (Recommended)

Vercel provides the best experience for Next.js applications with zero configuration.

#### Option 1: Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pranjal2410719/studyXpress)

#### Option 2: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

#### Option 3: GitHub Integration

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Deploy

**Environment Variables for Vercel:**
- Set in Vercel Dashboard → Project Settings → Environment Variables
- Use `.env.production` values for production deployment

### Netlify

Netlify is another excellent option for static site deployment.

#### Option 1: Deploy Button
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pranjal2410719/studyXpress)

#### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=out
     ```

#### Option 3: GitHub Integration

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build && npm run export`
5. Set publish directory: `out`
6. Deploy

### Docker

Deploy using Docker for containerized environments.

#### Local Docker Deployment

1. **Build the image**
   ```bash
   docker build -t studyxpress .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 studyxpress
   ```

#### Docker Compose

1. **Development**
   ```bash
   docker-compose --profile dev up
   ```

2. **Production**
   ```bash
   docker-compose up
   ```

#### Deploy to Cloud Platforms

**AWS ECS:**
```bash
# Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker build -t studyxpress .
docker tag studyxpress:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/studyxpress:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/studyxpress:latest
```

**Google Cloud Run:**
```bash
# Build and deploy
gcloud builds submit --tag gcr.io/PROJECT-ID/studyxpress
gcloud run deploy --image gcr.io/PROJECT-ID/studyxpress --platform managed
```

### Traditional VPS

Deploy to a traditional VPS or dedicated server.

#### Using PM2 (Recommended)

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "studyxpress" -- start
   pm2 save
   pm2 startup
   ```

#### Using systemd

1. **Create service file**
   ```bash
   sudo nano /etc/systemd/system/studyxpress.service
   ```

2. **Service configuration**
   ```ini
   [Unit]
   Description=StudyXpress Next.js Application
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/var/www/studyxpress
   ExecStart=/usr/bin/npm start
   Restart=on-failure
   Environment=NODE_ENV=production

   [Install]
   WantedBy=multi-user.target
   ```

3. **Enable and start**
   ```bash
   sudo systemctl enable studyxpress
   sudo systemctl start studyxpress
   ```

## CI/CD Setup

The project includes GitHub Actions workflows for automated deployment.

### Required Secrets

Add these secrets to your GitHub repository:

**For Vercel:**
- `VERCEL_TOKEN`: Your Vercel token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

**For other platforms:**
- Add platform-specific secrets as needed

### Workflow Features

- **Continuous Integration**: Runs on every push and PR
- **Automated Testing**: Linting, type checking, and builds
- **Security Scanning**: Dependency and vulnerability scanning
- **Preview Deployments**: Automatic preview deployments for PRs
- **Production Deployment**: Automatic deployment to production on main branch

## Environment Variables

### Required Variables

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

### Optional Variables

See `.env.example` for a complete list of available environment variables.

### Platform-Specific Setup

**Vercel:**
- Set in Dashboard → Project Settings → Environment Variables

**Netlify:**
- Set in Dashboard → Site Settings → Environment Variables

**Docker:**
- Use `.env` file or pass via `-e` flag

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (must be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names (case-sensitive)
   - Verify NEXT_PUBLIC_ prefix for client-side variables

3. **Performance Issues**
   - Enable image optimization
   - Configure caching headers
   - Use CDN for static assets

### Getting Help

- Check the [GitHub Issues](https://github.com/pranjal2410719/studyXpress/issues)
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Contact support: support@studyxpress.com

## Security Considerations

- Always use HTTPS in production
- Set secure headers (included in configurations)
- Regularly update dependencies
- Use environment variables for sensitive data
- Enable security scanning in CI/CD

---

For more detailed information, refer to the main [README.md](../README.md) file.
