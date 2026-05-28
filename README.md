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
3. 若不填写 `conceptImage`，页面会自动显示 CSS 占位概念图卡片。

## 如何修改原文与注释

1. 在 `src/data/temples.ts` 修改 `originalText`。
2. 注释编号建议使用 `①②③...`，并在 `annotations` 数组中逐条对应。
3. `Annotation` 结构：
   - `marker`: 编号（例如 `①`）
   - `term`: 术语（例如 `熙平元年`）
   - `explanation`: 注释说明
