# 🚀 GitHub Pages 部署步骤

您的代码已经上传到 GitHub，现在按照以下步骤部署到 GitHub Pages。

---

## 📋 部署前确认

在开始部署前，请确认您已经更新了以下文件中的 GitHub 用户名：

- [ ] `content/siteMeta.json` - 更新 `siteUrl`
- [ ] `public/robots.txt` - 更新 sitemap URL
- [ ] `public/sitemap.xml` - 更新所有 `<username>` 为您的 GitHub 用户名

如果还没有更新，请先更新这些文件，然后推送到 GitHub。

---

## 🎯 方法 1：使用 GitHub Actions（推荐）

### 步骤 1：创建 GitHub Actions 工作流

在您的项目根目录创建 `.github/workflows/deploy.yml` 文件：

```bash
# 创建目录
mkdir -p .github/workflows

# 创建工作流文件
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
EOF

# 添加并提交
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions workflow for deployment"
git push
```

### 步骤 2：配置 GitHub Pages

1. 访问您的 GitHub 仓库
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Source** (来源) 部分：
   - 选择 **GitHub Actions**
   
5. 保存后，返回仓库首页

### 步骤 3：触发部署

推送代码后，GitHub Actions 会自动运行：

1. 前往 **Actions** 标签页
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待绿色 ✓ 完成标记
4. 部署完成！

### 步骤 4：访问您的网站

网站将在几分钟内上线：
```
https://YOUR_USERNAME.github.io/podsite/
```

---

## 🔧 方法 2：使用 gh-pages 包（手动部署）

### 步骤 1：安装 gh-pages

```bash
cd /Users/victor.wang/podsite/podsite
npm install --save-dev gh-pages
```

### 步骤 2：添加部署脚本

编辑 `package.json`，在 `"scripts"` 部分添加：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy": "gh-pages -d out"
  }
}
```

### 步骤 3：构建和部署

```bash
# 构建静态站点
npm run build

# 部署到 gh-pages 分支
npm run deploy
```

### 步骤 4：配置 GitHub Pages

1. 访问您的 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. 在 **Source** 下选择 **gh-pages** 分支
4. 点击 **Save**

### 步骤 5：等待部署完成

几分钟后访问：
```
https://YOUR_USERNAME.github.io/podsite/
```

---

## 🔍 验证部署

部署完成后，检查以下内容：

### 基础检查
- [ ] 网站可以访问
- [ ] 首页正常显示
- [ ] 导航链接正常工作
- [ ] 所有页面可访问（Episodes, About, FAQ）

### 资源检查
- [ ] Favicon 显示正常
- [ ] Episode 封面图片显示
- [ ] 音频播放器工作
- [ ] 移动端 hamburger 菜单功能正常

### SEO 检查
- [ ] `robots.txt` 可访问：`/podsite/robots.txt`
- [ ] `sitemap.xml` 可访问：`/podsite/sitemap.xml`
- [ ] Open Graph 图片正常

---

## ⚠️ 常见问题排查

### 问题 1：404 页面找不到

**症状**：访问网站显示 GitHub 404 页面

**解决方案**：
1. 确认 GitHub Pages 已启用
2. 确认选择了正确的分支（GitHub Actions 或 gh-pages）
3. 等待 5-10 分钟，GitHub Pages 首次部署需要时间

### 问题 2：样式/图片不显示

**症状**：页面显示但没有样式或图片

**解决方案**：
1. 检查浏览器控制台是否有 404 错误
2. 确认 `next.config.js` 中 `basePath: '/podsite'` 配置正确
3. 确认仓库名称与 basePath 一致
4. 清除浏览器缓存后刷新

### 问题 3：GitHub Actions 构建失败

**症状**：Actions 标签页显示红色 ✗

**解决方案**：
1. 点击失败的工作流查看错误日志
2. 常见原因：
   - `package-lock.json` 与 `package.json` 不同步
   - Node 版本不兼容
   - 构建命令错误

**修复**：
```bash
# 本地重新生成 lock 文件
rm -f package-lock.json
npm install
git add package-lock.json
git commit -m "fix: update package-lock.json"
git push
```

### 问题 4：页面刷新后 404

**症状**：直接访问子页面（如 `/about/`）显示 404

**解决方案**：
确认 `next.config.js` 中有 `trailingSlash: true`：
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,  // 必须
  basePath: '/podsite',
  // ...
}
```

---

## 🔄 后续更新流程

当您需要更新网站内容时：

### 使用 GitHub Actions
```bash
# 修改代码
git add .
git commit -m "update: your changes"
git push

# GitHub Actions 自动部署，无需其他操作
```

### 使用 gh-pages
```bash
# 修改代码
git add .
git commit -m "update: your changes"
git push

# 重新构建和部署
npm run build
npm run deploy
```

---

## 📊 部署状态检查

### 查看 GitHub Actions 状态
1. 访问仓库的 **Actions** 标签
2. 查看最新的工作流运行
3. 绿色 ✓ = 成功部署
4. 红色 ✗ = 部署失败，点击查看日志

### 查看 Pages 部署状态
1. 访问 **Settings** → **Pages**
2. 顶部显示部署状态和 URL
3. 绿色提示 = 网站已上线

---

## 🎉 部署成功！

恭喜！您的播客网站已经部署到 GitHub Pages！

**您的网站地址**：
```
https://YOUR_USERNAME.github.io/podsite/
```

### 下一步建议

1. **分享您的网站**
   - 在社交媒体上分享
   - 添加到您的简历或作品集

2. **性能测试**
   - 使用 Lighthouse 测试 (Chrome DevTools)
   - 确认 SEO 和可访问性分数

3. **自定义域名**（可选）
   - 在 GitHub Pages 设置中添加自定义域名
   - 配置 DNS 记录

4. **添加分析**（可选）
   - Google Analytics
   - 其他网站分析工具

---

## 📞 需要帮助？

如果遇到问题：
1. 检查 GitHub Actions 日志
2. 查看浏览器控制台错误
3. 确认所有配置文件正确
4. 清除缓存后重试

祝您的播客网站运行顺利！🎙️✨

