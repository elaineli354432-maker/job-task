# 北魏洛阳伽蓝图（静态前端示例）

基于 React + TypeScript + Vite + Tailwind CSS + React Router 的数字古籍交互网页。

## 安装

```bash
npm install
```

## 运行

```bash
npm run dev
```

默认访问：`http://localhost:5173`

## 构建与 GitHub Pages 部署说明

```bash
npm run build
```

本项目在 `vite.config.ts` 中按命令区分路径：

```ts
base: command === 'build' ? '/job-task/' : '/'
```

这是为了适配 GitHub Pages 的项目站点路径：`https://<用户名>.github.io/job-task/`。本地开发仍使用 `/`，生产构建使用 `/job-task/`。如果以后仓库名或部署子路径改变，请同步修改 `vite.config.ts` 中的 `base`。

入口路由使用 `BrowserRouter basename={import.meta.env.BASE_URL}`，因此部署到 GitHub Pages 时会按 `/job-task/` 作为应用根路径，避免 React Router 在子路径下无法匹配。


## GitHub Pages 自动部署

仓库已包含 `.github/workflows/gh-pages.yml`。推送到 `main` 分支后，GitHub Actions 会运行 **Build and publish static site to gh-pages** 工作流：

1. 安装依赖。
2. 执行 `npm run build`。
3. 将 `dist/index.html` 复制为 `dist/404.html`，用于支持直接打开或刷新详情页路由。
4. 将构建后的 `dist` 发布到 `gh-pages` 分支。

请在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中设置：

- **Source**：Deploy from a branch
- **Branch**：`gh-pages`
- **Folder**：`/ (root)`

这样可以避开仓库里 `github-pages` 环境保护规则对 `actions/deploy-pages` 的限制。如果之前选择过 **GitHub Actions**，请改回以上 `gh-pages` 分支部署方式。

### 如果仍看到 “Branch main is not allowed to deploy to github-pages”

这说明你正在重跑旧的 `actions/deploy-pages` 工作流，或者 GitHub Pages 仍被设置为 **GitHub Actions** 部署源。请不要点击旧失败记录右上角的 **Re-run jobs**；应当推送/合并最新提交，让新的 **Build and publish static site to gh-pages** 工作流重新触发。新的工作流文件名是 `gh-pages.yml`，页面里只会看到一个 job：`publish-static-site`，不会再出现旧 `deploy.yml` 里的 `build` / `deploy` 两个 job。

### 如果 Actions 里仍然出现 deploy.yml

本仓库已经删除 `.github/workflows/deploy.yml`，改用 `.github/workflows/gh-pages.yml`。如果 GitHub Actions 页面标题仍是 `deploy.yml`，说明运行的不是最新提交中的 workflow。请确认 PR 已合并到 `main`，或在最新提交页面手动运行 **Build and publish static site to gh-pages**。

## 如何新增一个寺庙节点

1. 打开 `src/data/temples.ts`。
2. 按 `Temple` 类型添加一个对象，最少填写：
   - `id`
   - `name`
   - `juan`
   - `area`
   - `type`
   - `x`, `y`（百分比坐标）
   - `shortDescription`
   - `originalText`
   - `annotations`
   - `imagePrompt`
3. 保存后，首页地图与详情页会自动读取并展示。

## 如何替换寺庙概念图

1. 把本地图片放到 `public/` 目录（例如 `public/images/yongning.jpg`）。
2. 在 `src/data/temples.ts` 对应寺庙中设置：
   ```ts
   conceptImage: '/images/yongning.jpg'
   ```
   组件会自动结合 Vite 的 `BASE_URL` 处理部署子路径；部署到 GitHub Pages 项目站点时，不需要手动给图片路径添加 `/job-task/` 前缀。
3. 若不填写 `conceptImage`，页面会自动显示 CSS 占位概念图卡片。

## 如何修改原文与注释

1. 在 `src/data/temples.ts` 修改 `originalText`。
2. 注释编号建议使用 `①②③...`，并在 `annotations` 数组中逐条对应。
3. `Annotation` 结构：
   - `marker`: 编号（例如 `①`）
   - `term`: 术语（例如 `熙平元年`）
   - `explanation`: 注释说明
