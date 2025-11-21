# Security Policy

## 🔒 Security Best Practices

This repository follows security best practices for static site deployment.

### ✅ Security Measures in Place

1. **No Sensitive Data in Code**
   - No API keys, passwords, or tokens in source code
   - All configuration is public-safe
   - `private: true` in package.json prevents npm publishing

2. **Environment Variables**
   - `.env` files are gitignored
   - No environment variables used in this static site
   - All configuration is in public JSON files (safe for static sites)

3. **Dependencies**
   - Regular dependency updates via npm
   - Only trusted packages from official npm registry
   - No deprecated or vulnerable packages

4. **Build Process**
   - Static export only (no server-side code)
   - GitHub Actions with minimal permissions
   - Automated deployment from main branch only

5. **GitHub Settings**
   - Branch protection recommended for production
   - Actions permissions limited to necessary scopes
   - Dependabot alerts enabled (recommended)

### 📋 Security Checklist for Contributors

Before committing:

- [ ] No `.env` files committed
- [ ] No API keys or tokens in code
- [ ] No personal information in mock data
- [ ] Dependencies are up to date
- [ ] No sensitive data in commit messages

### 🔍 What This Project Does NOT Have

Since this is a static site, it does NOT contain:

- ❌ Backend API endpoints
- ❌ Database credentials
- ❌ Server-side secrets
- ❌ User authentication tokens
- ❌ Payment information
- ❌ Personal data processing

### 🛡️ Files That Should NEVER Be Committed

The `.gitignore` file prevents these from being committed:

```
# Environment files
.env
.env.local
.env*.local

# API Keys and Secrets  
*.key
*.pem
secrets.json
config/secrets.yml

# OS files
.DS_Store

# Build artifacts
node_modules/
.next/
out/
```

### 📊 Public Information

The following information is intentionally public:

- **Site URL**: Configured in `content/siteMeta.json`
- **Social Links**: Placeholder links in `siteMeta.json`
- **Episode Data**: Mock podcast data (not real)
- **Assets**: All images and audio are placeholder files

### 🚨 Reporting Security Issues

If you discover a security vulnerability:

1. **DO NOT** open a public issue
2. Email the repository owner directly
3. Include details about the vulnerability
4. Allow time for a fix before public disclosure

### 📱 Production Deployment

For production use:

1. ✅ Update all URLs in `siteMeta.json`
2. ✅ Replace placeholder social links
3. ✅ Add real episode content
4. ✅ Enable branch protection rules
5. ✅ Review GitHub Actions permissions
6. ✅ Enable Dependabot security updates

### 🔄 Regular Maintenance

Recommended security practices:

- Update dependencies monthly: `npm update`
- Check for vulnerabilities: `npm audit`
- Review GitHub security alerts
- Keep Next.js and React updated

---

## 📄 License Compliance

This project uses MIT License. All dependencies are also open source with compatible licenses.

---

**Last Updated**: 2024-11-21  
**Security Contact**: Repository owner

