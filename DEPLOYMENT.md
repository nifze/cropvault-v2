# Deployment Guide

## Quick Start Deployment

### Vercel (Recommended)

Vercel is optimized for Next.js and provides the best experience.

#### Method 1: CLI
```bash
npm install -g vercel
vercel login
vercel
```

#### Method 2: Git Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import repository
5. Configure environment variables
6. Deploy

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or connect Git repository at [netlify.com](https://netlify.com)

### Traditional Hosting (VPS/Server)

#### Prerequisites
- Node.js 18+
- npm or yarn
- PM2 (process manager)

#### Steps

1. **Clone repository**
```bash
git clone <your-repo>
cd cropvault-v2
```

2. **Install dependencies**
```bash
npm install --production
```

3. **Build**
```bash
npm run build
```

4. **Create PM2 ecosystem file** (`ecosystem.config.js`):
```javascript
module.exports = {
  apps: [
    {
      name: 'cropvault',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
```

5. **Start with PM2**
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

6. **Setup Nginx reverse proxy** (`/etc/nginx/sites-available/cropvault`):
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Enable gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

7. **Enable site**
```bash
sudo ln -s /etc/nginx/sites-available/cropvault /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

8. **Setup SSL (Let's Encrypt)**
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Environment Variables

### Required Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

### Optional Variables
```env
# Analytics (if using)
NEXT_PUBLIC_GA_ID=your-ga-id

# Email (if using contact form backend)
SMTP_USER=your-email
SMTP_PASSWORD=your-password
SMTP_HOST=smtp.provider.com
SMTP_PORT=587
```

## Performance Optimization

### Enable Caching

In `next.config.js`:
```javascript
headers: async () => {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ],
    },
  ];
}
```

### CDN Configuration

1. **Cloudflare** (Recommended)
   - Free tier available
   - Excellent performance
   - DDoS protection

2. **AWS CloudFront**
   - Advanced features
   - Pay-per-use
   - Global distribution

3. **BunnyCDN**
   - Affordable
   - Fast speeds
   - Simple setup

### Database Backups

Set up automatic backups if using a database:
```bash
# Daily backup script
0 2 * * * /home/user/backup.sh
```

## Monitoring

### Error Tracking

Use Sentry:
```bash
npm install @sentry/nextjs
```

In `next.config.js`:
```javascript
const withSentry = require('@sentry/nextjs/withSentry');

module.exports = withSentry({
  // ... your config
});
```

### Performance Monitoring

- Vercel Analytics (built-in on Vercel)
- Google Analytics
- LogRocket
- New Relic

### Uptime Monitoring

- UptimeRobot (free)
- Pingdom
- StatusPage.io

## Scaling

### Load Balancing

For high-traffic sites:
```bash
# Use nginx load balancing
upstream app_servers {
    server localhost:3001;
    server localhost:3002;
    server localhost:3003;
}
```

### Database Scaling

- Read replicas
- Connection pooling
- Caching layer (Redis)

## Troubleshooting

### High Memory Usage
```bash
# Monitor memory
pm2 monit

# Restart on high memory
pm2 set max_memory_restart 500M
```

### Slow Response Times
1. Check Lighthouse scores
2. Analyze bundle size
3. Review database queries
4. Enable caching

### SSL Certificate Issues
```bash
# Renew SSL certificate
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

### 502 Bad Gateway
1. Check if app is running: `pm2 status`
2. Restart app: `pm2 restart cropvault`
3. Check logs: `pm2 logs cropvault`
4. Verify Nginx config: `sudo nginx -t`

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] CORS configured
- [ ] Environment variables protected
- [ ] Regular security updates
- [ ] Web Application Firewall enabled
- [ ] DDoS protection active
- [ ] Backup strategy in place
- [ ] Monitoring and alerts set up

## Post-Deployment

1. **Test critical flows**
   - Navigation
   - Forms
   - 3D scenes
   - Animations

2. **Monitor logs**
   ```bash
   pm2 logs cropvault -n 50
   ```

3. **Check performance**
   - Run Lighthouse
   - Check Core Web Vitals
   - Monitor error rates

4. **Setup alerts**
   - Error threshold
   - CPU/Memory usage
   - Response time

## Rollback Plan

If something goes wrong:

```bash
# With PM2
pm2 restart cropvault

# With git
git revert <commit-hash>
npm run build
pm2 restart cropvault

# With Docker
docker rollback <previous-version>
```

## Maintenance Schedule

- **Daily**: Check logs
- **Weekly**: Performance review
- **Monthly**: Security audit
- **Quarterly**: Dependency updates
- **Yearly**: Major version upgrades

---

**Deployed successfully!** 🎉

Monitor your site regularly and keep everything up to date.
