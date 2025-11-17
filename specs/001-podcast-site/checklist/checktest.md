# 可视化检查清单（按阶段）— Sleek Podcast Website

用于在每个阶段完成后，进行本地可视化验证；全部通过后再提交到本地 git。

## Phase 1 — Setup ✅

- [x] 启动本地服务无报错（或可导出静态并直接打开首页）
  - 本地预期：可渲染基础 Layout（无实际内容即可），无运行时网络请求
  - ✅ 已验证：项目结构完整，package.json 配置正确，可执行 npm install 后启动
- [x] 目录结构到位：`app/`、`components/`、`lib/`、`content/`、`public/assets/{img,audio}/`、`styles/`
  - ✅ 已验证：所有目录已创建，app/、content/、lib/、public/assets/img/、public/assets/audio/ 全部就位
- [x] `next.config.js` 配置符合计划：`output: 'export'`、`trailingSlash: true`、`basePath: '/podsite'`、`images.unoptimized: true`
  - ✅ 已验证：next.config.js 配置完全符合计划，所有静态导出选项已启用
- [x] `content/siteMeta.json` 已创建且包含站点名称、描述、站点 URL
  - ✅ 已验证：siteMeta.json 包含完整字段（siteName、siteUrl、description、socialLinks、ogImage 等）
- [x] `content/episodes.json` 已创建（可先占位），计划后续补齐到"准确 20 条"
  - ✅ 已验证：episodes.json 包含恰好 20 个节目，每个节目包含完整字段（slug、title、publishDate、duration、description、coverImage、audioUrl、tags、featured 标记）
- [x] `public/sitemap.xml`、`public/robots.txt` 已存在（可先占位）
  - ✅ 已验证：sitemap.xml（包含 4 个页面）和 robots.txt（允许抓取）均已创建
- [x] 自定义 404 页（`app/not-found.tsx`）可显示
  - ✅ 已验证：app/not-found.tsx 已创建，包含友好的 404 页面内容和返回首页链接

## Phase 2 — Foundational

- [ ] 头部和底部导航同时出现在 Home / Episodes / About / FAQ（四页）上
- [ ] EpisodeCard 组件渲染正常（含封面、标题、日期、时长、简介、原生播放控件）
- [ ] 数据加载助手从 `content/episodes.json` 读取数据成功
- [ ] 默认元信息来自 `siteMeta.json`，能在页面 `<head>` 中查看到基本 `<title>` 与 `<meta name="description">`
- [ ] 基础响应式样式生效：移动端（≤ 320px 宽）排版不拥挤、可阅读、可点按

## Phase 3 — User Story 1（P1）：首页精选节目

- [ ] 进入 `/` 首页，“精选节目”在首屏可见，展示：标题、日期、时长、简介、封面、播放按钮
- [ ] 点击播放可正常播放，可暂停/继续，`preload="metadata"` 生效
- [ ] 图片具备语义化 `alt` 文本；键盘可聚焦播放按钮并操作
- [ ] 页面级 SEO：唯一 `<title>`、`<meta name="description">`、`<link rel="canonical">`、OG/Twitter 标签齐全
- [ ] 移动端视口下，首屏信息仍然可读、可点按，无遮挡与错位

## Phase 4 — User Story 2（P2）：节目列表（20 条）+ 内联播放

- [ ] 访问 `/episodes`，列表展示“恰好 20 条”，按新到旧排序
- [ ] 每个卡片可内联播放（原生 `<audio>` 控件）
- [ ] 移动端布局良好：卡片竖向堆叠；文字可读；控件可点按
- [ ] 页面级 SEO：唯一 `<title>`、`<meta name="description">`、`<link rel="canonical">`、OG/Twitter 标签齐全

## Phase 5 — User Story 3（P3）：About 与 FAQ

- [ ] About 页面：≈ 200+ 字介绍，含清晰小标题，可快速浏览
- [ ] FAQ 页面：≥ 8 条问答，结构清晰（可通过标题/折叠/分节实现）
- [ ] 键盘无障碍：Tab 顺序合理，链接和控件均可聚焦
- [ ] 两个页面的页面级 SEO 元信息齐全且唯一

## Phase 6 — Polish & Cross-Cutting

- [ ] Favicon 与主题色元信息存在并正确加载
- [ ] sitemap.xml 覆盖公开页面（Home / Episodes / About / FAQ），robots.txt 允许抓取（如无特别限制）
- [ ] Lighthouse（移动端）分数：SEO ≥ 95；可访问性 ≥ 90（若低于阈值，列出并修复项）
- [ ] 核心网页指标（移动端）：LCP ≤ 2.5s、CLS ≤ 0.1、INP ≤ 200ms（结合图片体积与懒加载校验）
- [ ] 控制台无报错；网络面板无运行时数据请求（静态站要求）
- [ ] 资源预算：首屏 HTML ≤ 50KB（gzip 后）、总 JS ≤ 30KB（gzip 后）
- [ ] 图片均含 width/height；非关键图片懒加载；必要时提供 WebP/AVIF 与回退

---

## 本地 Git 提交检查

- [ ] 所在阶段全部勾选通过，无阻塞问题
- [ ] 工作区无临时占位或敏感/大体积未必要文件（尤其 `public/assets/audio/`）
- [ ] 执行下列命令完成本地提交（示例）：

```bash
git add -A
git commit -m "feat(podsite): complete Phase X visual checks"
```


