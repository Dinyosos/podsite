# 🚀 Quick Start Guide

快速开始使用 Podsite 项目。

## 📦 项目结构

```
podsite/
├── podsite/          ← 主项目代码（推送到 GitHub）
│   ├── app/         # 页面
│   ├── components/  # 组件
│   ├── lib/         # 工具函数
│   ├── content/     # 数据（JSON）
│   ├── public/      # 静态资源
│   └── ...
│
└── specs/           ← 项目文档（可选）
    └── 001-podcast-site/
        ├── spec.md
        ├── plan.md
        └── tasks.md
```

## 🎯 推荐方案：只推送 podsite/ 目录

### 方式 A：在 podsite/ 目录初始化 Git（推荐）

```bash
# 1. 进入 podsite 目录
cd /Users/victor.wang/podsite/podsite

# 2. 初始化 Git
git init

# 3. 添加所有文件
git add .

# 4. 首次提交
git commit -m "Initial commit: Podsite podcast website"

# 5. 创建 main 分支
git branch -M main

# 6. 在 GitHub 创建新仓库后，添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/podsite.git

# 7. 推送到 GitHub
git push -u origin main
```

### 方式 B：推送整个仓库（包含文档）

```bash
# 1. 在根目录
cd /Users/victor.wang/podsite

# 2. 初始化 Git（如果还没有）
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit: Podsite with documentation"

# 5. 创建 main 分支
git branch -M main

# 6. 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/podsite-repo.git

# 7. 推送
git push -u origin main
```

## ⚙️ 部署前准备

在推送到 GitHub 之前，**务必更新**以下文件中的 `<username>` 为您的 GitHub 用户名：

### 1. `podsite/content/siteMeta.json`
```json
{
  "siteUrl": "https://YOUR_USERNAME.github.io/podsite"
}
```

### 2. `podsite/public/robots.txt`
```
Sitemap: https://YOUR_USERNAME.github.io/podsite/sitemap.xml
```

### 3. `podsite/public/sitemap.xml`
将所有 URL 中的 `<username>` 替换为您的用户名：
```xml
<loc>https://YOUR_USERNAME.github.io/podsite/</loc>
```

## 🌐 GitHub Pages 部署

### 快速部署

```bash
# 1. 进入 podsite 目录
cd podsite

# 2. 构建静态站点
npm run build

# 3. 安装 gh-pages（首次需要）
npm install --save-dev gh-pages

# 4. 添加部署脚本到 package.json
# 在 "scripts" 中添加：
# "deploy": "gh-pages -d out"

# 5. 部署
npm run deploy
```

### 启用 GitHub Pages

1. 访问您的 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. 在 "Source" 下选择 **gh-pages** 分支
4. 点击 **Save**
5. 等待几分钟后访问: `https://YOUR_USERNAME.github.io/podsite/`

## 📋 完整检查清单

部署前确认：

- [ ] 已更新 `siteMeta.json` 中的 `siteUrl`
- [ ] 已更新 `robots.txt` 中的 sitemap URL
- [ ] 已更新 `sitemap.xml` 中的所有 URL
- [ ] 已在 GitHub 创建仓库
- [ ] 已推送代码到 GitHub
- [ ] 已构建项目 (`npm run build`)
- [ ] 已部署到 gh-pages 分支
- [ ] 已在 GitHub 启用 Pages
- [ ] 网站可以正常访问

## 🔍 本地测试

### 开发模式
```bash
cd podsite
npm install
npm run dev
```
访问: http://localhost:3000/podsite/

### 生产构建预览
```bash
cd podsite
npm run build
npx serve out
```

## 📚 详细文档

- **完整部署指南**: 查看 `podsite/DEPLOYMENT.md`
- **项目说明**: 查看 `podsite/README.md`
- **贡献指南**: 查看 `podsite/CONTRIBUTING.md`

## 🆘 常见问题

### 图片/音频无法加载
检查 `next.config.js` 中的 `basePath` 配置是否正确。

### 404 错误
确保在 GitHub Pages 设置中选择了 **gh-pages** 分支。

### 构建失败
```bash
# 清理并重新安装
rm -rf node_modules package-lock.json .next out
npm install
npm run build
```

## ✅ 成功！

部署成功后，您的网站将在以下地址可访问：
```
https://YOUR_USERNAME.github.io/podsite/
```

享受您的播客网站！🎉

