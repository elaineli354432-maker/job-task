# 北魏洛阳伽蓝图（纯静态版）

这是一个无需构建工具的纯静态网页项目，使用原生 HTML + CSS + JavaScript 实现《洛阳伽蓝记》主题的“北魏洛阳伽蓝图”。

## 文件结构

```text
index.html   # 页面结构，必须位于仓库根目录
style.css    # 古地图 / 古籍阅读风格样式
script.js    # 寺庙数据、筛选交互、详情面板、历史线渲染
```

本项目不再依赖：

- React
- Vite
- TypeScript
- Tailwind CSS
- npm install
- npm run build

## 本地预览

直接双击 `index.html` 即可打开。

也可以使用任意静态服务器预览，例如：

```bash
python3 -m http.server 8000
```

然后访问：`http://localhost:8000/`

## GitHub Pages 部署设置

请在 GitHub 仓库中打开：

**Settings → Pages → Build and deployment**

选择：

- **Source**：Deploy from a branch
- **Branch**：`main`
- **Folder**：`/ (root)`

因为 `index.html` 已经位于仓库根目录，GitHub Pages 可以直接从 `main` 分支根目录部署，不需要 GitHub Actions，不需要 `gh-pages` 分支，也不需要任何 npm 构建步骤。


## GitHub Pages 子路径资源说明

本项目部署在 `https://<用户名>.github.io/job-task/` 这类子路径时，`index.html` 中的资源必须使用相对路径。当前入口已写为：

```html
<link rel="stylesheet" href="./style.css" />
<script src="./script.js"></script>
```

请不要改成 `/style.css`、`/script.js` 或 `/assets/xxx`，否则浏览器会从 `https://<用户名>.github.io/` 根路径请求资源，项目页 `/job-task/` 下就可能出现样式/脚本加载失败。页面的标题、说明、地图容器和阅读区都直接写在 `index.html` 中，即使脚本加载失败也不会是完全空白。

## 如何新增寺庙节点

打开 `script.js`，在 `temples` 数组中新增对象：

```js
{
  id: 'new-temple',
  name: '新寺名',
  juan: '卷一',
  area: '城内',
  type: '寺院类型',
  x: 52,
  y: 38,
  description: '简短说明',
  original: '【此处替换为《洛阳伽蓝记》原文】',
  translation: '译文',
  annotations: [['①', '术语', '解释']],
  events: ['相关历史事件']
}
```

其中 `x`、`y` 是地图容器中的百分比坐标。

## 如何修改原文、注释、译文与历史事件

仍然在 `script.js` 中修改对应寺庙对象：

- `original`：原文，支持 `①②③` 等注释编号。
- `translation`：译文。
- `annotations`：注释列表，每条为 `[编号, 术语, 解释]`。
- `events`：相关历史事件数组。

## 如何修改魏晋南北朝历史线

打开 `script.js`，修改 `timeline` 数组即可：

```js
['493', '北魏孝文帝迁都洛阳。']
```

## 视觉风格说明

页面使用米白纸张背景、墨线城墙、朱砂色点位、淡金色高亮，并加入纸张纹理和手绘式地图层次，整体方向为“古代画风 + 动漫笔触”的静态数字古籍界面。
