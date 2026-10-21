# 对话颜色色点 · Color Swatch Dots

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

为 DeepSeek Harness Web UI 的对话加一层颜色提示：消息里的颜色值前面会出现一颗对应颜色的圆点。把鼠标移到圆点上，即可查看并复制它的 HEX、RGB、HSL 与 CSS 名称写法。

纯客户端插件 Bundle，Host 半边为空实现；不改动 Harness 的任何宿主逻辑，卸载后界面立即恢复原样。

> A DeepSeek Harness Web Client plugin that draws a color dot before inline color values in chat, with a popover for previewing and copying HEX / RGB / HSL / CSS name forms.

---

## 功能

- **自动识别颜色**：对话里以内联代码形式出现的 HEX、`0x` 前缀 HEX、`rgb()` / `rgba()`、`hsl()` / `hsla()`、CSS 命名色，以及浏览器支持的 CSS Color 4 写法，都会在值前补上一颗圆形色点。
- **一眼看懂颜色**：色点直接使用该颜色填充，并带一圈细描边，在浅色与深色主题下都能看清。
- **悬停查看**：悬停色点弹出浮层，展示颜色块和全部可复制写法；浮层会自动避开窗口边缘，空间不足时翻到色点上方，并跟随滚动与窗口缩放重新定位。
- **点击复制**：点击浮层里的任意一行即可复制该写法，成功时行尾出现对勾并弹出轻提示；剪贴板不可用时回退到选区复制，失败也会明确提示。
- **中英双语**：浮层与提示文案跟随 Harness 的当前语言，中文 / English 自动切换。
- **尊重动态效果偏好**：开启「减少动态效果」后关闭色点缩放、浮层与提示的入场动画。
- **零网络、零持久化**：不发起请求、不写入存储，颜色解析完全在本地完成。

## 支持的写法

| 类型 | 示例 | 说明 |
| --- | --- | --- |
| HEX | `#f80`、`#7FB2FF`、`#7FB2FFCC` | 支持 3 / 4 / 6 / 8 位，大小写不敏感 |
| `0x` 前缀 HEX | `0x7FB2FF` | 与 HEX 等长，自动按 `#` 颜色处理 |
| RGB / RGBA | `rgb(127, 178, 255)`、`rgba(127 178 255 / 80%)` | 逗号或空格分隔、斜杠透明度均可 |
| HSL / HSLA | `hsl(216 100% 75%)`、`hsla(216, 100%, 75%, .8)` | 支持角度与百分比写法 |
| CSS 命名色 | `rebeccapurple`、`tomato`、`steelblue` | 内置全部 148 个 CSS 命名色 |
| CSS Color 4 | `hwb()`、`lab()`、`lch()`、`oklab()`、`oklch()`、`color()` | 由浏览器 `CSS.supports('color', …)` 校验，不支持的写法不会加色点 |

为避免误判，以下内容会被跳过：长度超过 80 字符的代码、包含控制字符的代码，以及 `var()`、`env()`、`attr()` 等运行时替换函数。

色点只加在**对话正文的内联代码**上：

- 只处理位于 `[data-chat-flow-kind]` 容器内的 `<code>`，不会影响侧栏、设置页或输入框；
- 代码块（`<pre>` 内）不加色点，避免破坏代码排版；
- 已包含按钮等交互元素的内联代码会保持原样。

## 交互

1. 悬停色点约 60 ms 后打开浮层，避免快速划过时闪烁。
2. 浮层顶部显示颜色块、标题与「点击任意写法即可复制」提示。
3. 点击一行复制，行尾的对勾会保留约 1.4 秒；底部提示停留约 2 秒。
4. 从色点移入浮层不会关闭；离开后保留 220 ms 的缓冲时间。
5. 点击浮层外部或按 `Esc` 立即关闭。

浮层中可复制的写法：

| 行 | 条件 | 示例 |
| --- | --- | --- |
| HEX | 始终显示；半透明时输出 8 位 | `#7FB2FF`、`#7FB2FFCC` |
| RGB | 始终显示；半透明时输出 `rgba()` | `rgb(127, 178, 255)` |
| HSL | 始终显示；半透明时输出 `hsla()` | `hsl(216, 100%, 75%)` |
| CSS 名称 | 不透明且与某个命名色完全一致时显示 | `#ff0000` → `red` |

若浏览器能识别该颜色但无法读出通道值，浮层会退化为一行原始 CSS 写法。

## 安装

本包通过 `package.json` 里的 `dsh.bundle.patch` 声明自己是一个 Bundle。安装时由插件管理器把下面这条插入 Harness 的插件树：

```yaml
- insert:
    - id: color-swatch
      name: '@local/color-swatch'
```

推荐流程：

1. 打开 Harness 的「插件」页，从本地目录安装本包。
2. 确认插件列表里出现「对话颜色色点 / Color Swatch Dots」。
3. 刷新页面，在对话里发送一条包含内联颜色代码的消息即可看到效果。

手动方式（开发时常用）：

1. 把仓库目录 link 进当前 profile 的 `node_modules`（`pnpm link` 或 `pnpm add file:../color-swatch`）。
2. 在 profile 的 Cordis 配置里加入上面的 `insert` 片段。
3. 重启 Harness 或刷新 Web UI。

插件依赖两个客户端包：`@deepseek-ai/dsh-client-ui-chat` 与 `@deepseek-ai/dsh-client-ui-layout`，它们在 `package.json` 的 `dsh.client.inject` 中声明，缺失时插件不会加载。

## 使用示例

在对话里发送下面任意一条，颜色值必须以**内联代码**（反引号）包裹：

```text
主色用 `#7FB2FF`，高亮用 `rebeccapurple`。
阴影是 `rgba(32, 23, 26, .32)`，描边是 `hsl(216 100% 75%)`。
```

每条消息发送后，代码里的颜色值前面会立即出现对应的色点；刷新页面后也会自动补上。

## 目录结构

```text
color-swatch/
├── package.json        # 包信息与 dsh.bundle / dsh.client 声明
├── cordis.patch.yml    # Bundle 的插入补丁
├── index.js            # Host 半边（空实现）
├── client.js           # 全部实现：样式、颜色解析、色点、浮层、复制
├── icon.svg            # 插件列表图标
├── locale/{zh,en}.json # 插件元信息文案
├── README.md
└── LICENSE             # MIT
```

## 开发

- 没有构建步骤：`client.js` 是手写的模块，直接通过 `window.__ModuleLoader__.load` 注册。
- 运行时只依赖 Harness 提供的 `react`，没有其他第三方依赖。
- 以 link 方式装进 profile 后，修改 `client.js` 会触发热重载，通常无需刷新页面；其他情况下重启 Harness 或刷新 Web UI 即可。
- 样式集中在 `client.js` 顶部的 `STYLES` 模板字符串中；界面文案在 `TEXT` 对象内，插件列表的标题与描述在 `locale/*.json` 内。
- 颜色识别与 DOM 装饰由 `MutationObserver` 驱动，按 `requestAnimationFrame` 批量处理；组件卸载时会断开监听并清除所有色点。
- 新增语言时，在 `TEXT` 中加一份词典，并在 `pickLocale` 中补充语言匹配即可。

## 兼容性与限制

- 面向 DeepSeek Harness Web UI，需浏览器支持 `CSS.supports`、Canvas 与 `MutationObserver`；不支持 `CSS.supports` 时仅保留对 `rgb()` / `rgba()` / `hsl()` / `hsla()` 的基础识别。
- 只装饰内联代码，纯文本或代码块中的颜色值不会出现色点。
- 半透明颜色的 HEX 输出为 8 位；RGB / HSL 的透明度保留最多 3 位小数。
- CSS 名称按浏览器解析结果映射；同一 HEX 对应多个名称时取内置列表中的第一个。
- 色点本身标记为装饰元素（`aria-hidden`），不进入键盘 Tab 序列；浮层内的复制行是标准按钮，可用键盘操作。

## 隐私

插件不收集、不上传任何数据，也不读取对话之外的内容；剪贴板写入只发生在用户点击复制行时。

## 许可证

[MIT](LICENSE) © 2026 [iKode423](https://github.com/iKode423)
