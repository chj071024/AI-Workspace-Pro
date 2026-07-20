# Design System — 个人品牌网站设计系统

> **版本**: v1.0
> **日期**: 2026-07-19
> **依赖**: website-plan.md
> **说明**: 本文档是网站视觉和交互设计的唯一权威规范。所有 UI 开发必须严格遵循本文档。

---

---

# 目录

1. [设计哲学](#1-设计哲学)
2. [颜色系统](#2-颜色系统)
3. [字体系统](#3-字体系统)
4. [间距系统](#4-间距系统)
5. [尺寸与断点](#5-尺寸与断点)
6. [圆角与阴影](#6-圆角与阴影)
7. [动效系统](#7-动效系统)
8. [图标系统](#8-图标系统)
9. [组件规范](#9-组件规范)
10. [页面布局规范](#10-页面布局规范)
11. [响应式设计规范](#11-响应式设计规范)
12. [可访问性规范](#12-可访问性规范)
13. [设计检查清单](#13-设计检查清单)

---

---

# 1. 设计哲学

---

## 1.1 核心设计原则

| 原则 | 说明 | 实践方式 |
|------|------|----------|
| **克制** | 不为炫技添加任何元素。每个元素必须有存在的理由。 | 添加任何元素前先问：移除它会降低用户理解吗？如果是，保留。如果否，删除。 |
| **留白** | 留白不是浪费空间，是让内容呼吸。 | Section 之间保持 120px+ 间距。元素之间保持足够的呼吸空间。 |
| **层级** | 用户扫描页面的顺序由视觉层级引导。 | 字号、颜色深浅、间距大小三者配合建立清晰的 1→2→3 阅读顺序。 |
| **一致性** | 相同的元素在任何页面看起来一样、行为一样。 | 按钮、卡片、标签等组件只定义一次，全局复用。 |
| **可读性** | 文字是网站最重要的元素。 | 行高 ≥1.5、每行 ≤75 字符、颜色对比度 ≥4.5:1。 |

---

## 1.2 设计参考与风格基准

| 参考品牌 | 借鉴方向 | 不借鉴的方向 |
|----------|----------|--------------|
| **Apple** | 产品页的留白、大标题、图片氛围、克制的动效 | 产品展示式的复杂滚动动画 |
| **Linear** | 界面干净度、图标风格、暗色模式的黑 | 应用界面的密集交互 |
| **Vercel** | 首页的信息层级、CTA 设计 | 过于技术化的文案 |
| **Stripe** | 对开发者的友好感、色彩运用 | 复杂的品牌色系统 |
| **Notion** | 排版干净、字体舒服、AI 功能展示 | 功能密集的布局 |
| **Raycast** | 极简、快速、专业感 | 命令行式的交互 |

---

## 1.3 设计禁忌清单

以下是本网站**永远不使用**的设计模式：

- ❌ 纯装饰性动画（旋转、弹跳、彩虹色）
- ❌ 过大的圆角（>16px 仅在特殊场景使用）
- ❌ 渐变文字（除非有极强的品牌理由）
- ❌ 浮动装饰元素（飘浮的球、粒子背景）
- ❌ 饱和度过高的颜色
- ❌ 超过 2 种字体家族
- ❌ 文本阴影用于正文
- ❌ 背景自动播放视频（除非是作品展示且用户可控）
- ❌ 光标跟随效果
- ❌ 页面切换动画（V1 没有 SPA）

---

---

# 2. 颜色系统

---

## 2.1 设计理念

> 黑白灰为主色调，蓝色为品牌色。色彩的作用是引导注意力，不是装饰。

- **黑**: 文字、标题、强调
- **白**: 背景、留白、卡片
- **灰**: 分割、次要信息、边框
- **蓝**: CTA、链接、交互状态

---

## 2.2 完整色板

### 中性色（Neutral）

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-black` | `#0A0A0A` | 最深文字、Footer 背景、强调 |
| `--color-gray-900` | `#171717` | 主要标题（h1, h2） |
| `--color-gray-800` | `#262626` | 次要标题（h3, h4） |
| `--color-gray-700` | `#404040` | 正文文字（默认） |
| `--color-gray-600` | `#525252` | 辅助文字 |
| `--color-gray-500` | `#737373` | 占位文字、禁用态文字 |
| `--color-gray-400` | `#A3A3A3` | 浅色辅助文字、图标 |
| `--color-gray-300` | `#D4D4D4` | 边框（默认） |
| `--color-gray-200` | `#E5E5E5` | 浅色分割线、卡片描边 |
| `--color-gray-100` | `#F5F5F5` | 浅灰背景（卡片、Section 交替） |
| `--color-gray-50` | `#FAFAFA` | 页面默认背景 |
| `--color-white` | `#FFFFFF` | 纯白背景、卡片背景 |

### 品牌色（Brand / Accent）

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-accent` | `#2563EB` | 主 CTA 按钮、链接文字、选中态 |
| `--color-accent-light` | `#3B82F6` | 悬停态 |
| `--color-accent-dark` | `#1D4ED8` | 按下态 |
| `--color-accent-bg` | `#EFF6FF` | 蓝色浅底（标签背景、高亮区域） |
| `--color-accent-border` | `#BFDBFE` | 蓝色边框 |

### 功能色（Functional）

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-success` | `#16A34A` | 成功状态 |
| `--color-success-bg` | `#F0FDF4` | 成功背景 |
| `--color-warning` | `#F59E0B` | 警告状态 |
| `--color-warning-bg` | `#FFFBEB` | 警告背景 |
| `--color-error` | `#DC2626` | 错误状态、表单验证错误 |
| `--color-error-bg` | `#FEF2F2` | 错误背景 |

---

## 2.3 颜色使用规则

### 文字颜色层级

```
一级文字（主要标题）: --color-gray-900  (#171717)
二级文字（次要标题）: --color-gray-800  (#262626)
三级文字（正文）:      --color-gray-700  (#404040)
四级文字（辅助说明）:   --color-gray-600  (#525252)
五级文字（占位/禁用）:  --color-gray-500  (#737373)
链接文字:              --color-accent    (#2563EB)
```

### 背景颜色层级

```
页面默认背景:         --color-gray-50   (#FAFAFA)
纯白卡片背景:         --color-white     (#FFFFFF)
浅灰交替背景:         --color-gray-100  (#F5F5F5)
Footer 背景:          --color-black     (#0A0A0A)
```

### 边框颜色层级

```
默认边框:             --color-gray-300  (#D4D4D4)
浅色描边:             --color-gray-200  (#E5E5E5)
输入框焦点:           --color-accent    (#2563EB)
错误边框:             --color-error     (#DC2626)
```

---

## 2.4 CSS 变量定义

```css
:root {
  /* ===== 中性色 ===== */
  --color-black:       #0A0A0A;
  --color-gray-900:    #171717;
  --color-gray-800:    #262626;
  --color-gray-700:    #404040;
  --color-gray-600:    #525252;
  --color-gray-500:    #737373;
  --color-gray-400:    #A3A3A3;
  --color-gray-300:    #D4D4D4;
  --color-gray-200:    #E5E5E5;
  --color-gray-100:    #F5F5F5;
  --color-gray-50:     #FAFAFA;
  --color-white:       #FFFFFF;

  /* ===== 品牌色 ===== */
  --color-accent:       #2563EB;
  --color-accent-light: #3B82F6;
  --color-accent-dark:  #1D4ED8;
  --color-accent-bg:    #EFF6FF;
  --color-accent-border:#BFDBFE;

  /* ===== 功能色 ===== */
  --color-success:      #16A34A;
  --color-success-bg:   #F0FDF4;
  --color-warning:      #F59E0B;
  --color-warning-bg:   #FFFBEB;
  --color-error:        #DC2626;
  --color-error-bg:     #FEF2F2;
}
```

---

---

# 3. 字体系统

---

## 3.1 字体栈

### 正文字体（Sans-serif）

```
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
"Helvetica Neue",
Arial,
"Noto Sans SC",        /* 中文兜底 */
"PingFang SC",         /* 中文兜底 macOS */
"Microsoft YaHei",     /* 中文兜底 Windows */
sans-serif
```

**选择理由**:
- `-apple-system` + `BlinkMacSystemFont`: 在 macOS/iOS 上使用 San Francisco，零加载时间
- `Segoe UI`: Windows 原生字体，清晰锐利
- `Noto Sans SC` + `PingFang SC`: 中文无衬线字体兜底
- 不使用 Web Font（如 Inter、Noto Sans），避免额外的网络请求和 FOIT/FOUT

### 等宽字体（Monospace）

```
"SF Mono",
"Fira Code",
"Fira Mono",
"Roboto Mono",
"Consolas",
"Liberation Mono",
"Courier New",
monospace
```

**使用场景**: 代码展示、技术标签、数据数值

---

## 3.2 字号层级

| Token | 计算值 | 用途 |
|-------|--------|------|
| `--text-xs` | `0.75rem` (12px) | 标签、脚注、辅助信息 |
| `--text-sm` | `0.875rem` (14px) | 小号正文、描述文字、导航链接 |
| `--text-base` | `1rem` (16px) | 默认正文 |
| `--text-lg` | `1.125rem` (18px) | 大号正文、强调段落 |
| `--text-xl` | `1.25rem` (20px) | 小标题、卡片标题 |
| `--text-2xl` | `1.5rem` (24px) | Section 小标题 (h4) |
| `--text-3xl` | `1.875rem` (30px) | 次级标题 (h3) |
| `--text-4xl` | `2.25rem` (36px) | 主要标题 (h2) |
| `--text-5xl` | `3rem` (48px) | 页面标题 (h1) |
| `--text-6xl` | `3.75rem` (60px) | Hero 大标题（仅在 Hero 使用） |

---

## 3.3 字重

| Token | 值 | 用途 |
|-------|-----|------|
| `--font-light` | `300` | 大号 Hero 标题（可选） |
| `--font-regular` | `400` | 默认正文 |
| `--font-medium` | `500` | 强调文字、导航链接、标签 |
| `--font-semibold` | `600` | 标题、按钮文字、CTA |
| `--font-bold` | `700` | Hero 大标题、强调标题 |

> **规则**: 正文使用 Regular (400)，标题使用 Semibold (600)，Hero 使用 Bold (700)。不使用超过 3 个字重。

---

## 3.4 行高

| Token | 值 | 用途 |
|-------|-----|------|
| `--leading-tight` | `1.25` | 大标题（h1, h2, Hero） |
| `--leading-snug` | `1.375` | 次级标题（h3, h4） |
| `--leading-normal` | `1.5` | 卡片描述、标签 |
| `--leading-relaxed` | `1.625` | 默认正文 |
| `--leading-loose` | `1.75` | 长文阅读（博客文章） |

---

## 3.5 字间距

| Token | 值 | 用途 |
|-------|-----|------|
| `--tracking-tighter` | `-0.02em` | 大标题 |
| `--tracking-normal` | `0` | 默认 |
| `--tracking-wide` | `0.025em` | 全大写标签、导航 |

---

## 3.6 排版规则

### 标题层级规则

```
一个页面只有一个 h1。
h2 → h3 → h4 必须严格嵌套，不跳级。
Section 标题使用 h2。
卡片标题使用 h3。
卡片内小标题使用 h4。
```

### 每行字符数

```
正文（桌面端）: ≤75 字符/行
正文（移动端）: ≤55 字符/行
大标题: ≤40 字符/行
```

### 段落规则

```
段落之间间距: 1.5em
段落内文字: 不超过 4 句话
列表项: 不超过 3 行
```

---

## 3.7 CSS 变量定义

```css
:root {
  /* 字体栈 */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC",
               "Microsoft YaHei", sans-serif;
  --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
               "Consolas", "Liberation Mono", "Courier New", monospace;

  /* 字号 */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;
  --text-5xl:  3rem;
  --text-6xl:  3.75rem;

  /* 字重 */
  --font-light:    300;
  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  /* 行高 */
  --leading-tight:   1.25;
  --leading-snug:    1.375;
  --leading-normal:  1.5;
  --leading-relaxed: 1.625;
  --leading-loose:   1.75;

  /* 字间距 */
  --tracking-tighter: -0.02em;
  --tracking-normal:  0;
  --tracking-wide:    0.025em;
}
```

---

---

# 4. 间距系统

---

## 4.1 设计理念

> 以 8px 为基准的线性间距系统。所有间距必须是 4px 的整数倍。

---

## 4.2 间距值表

| Token | 计算值 | 像素值 | 用途 |
|-------|--------|--------|------|
| `--space-0` | `0` | 0px | 紧贴 |
| `--space-1` | `0.25rem` | 4px | 极小间距（图标与文字、标签内边距） |
| `--space-2` | `0.5rem` | 8px | 紧密间距（卡片内元素、表单元素间） |
| `--space-3` | `0.75rem` | 12px | 小间距（列表项间距、按钮内边距） |
| `--space-4` | `1rem` | 16px | 基础间距（卡片内边距、段落间距） |
| `--space-5` | `1.25rem` | 20px | 加大间距（标题与正文间距） |
| `--space-6` | `1.5rem` | 24px | 中等间距（卡片间距、Section 内模块间距） |
| `--space-8` | `2rem` | 32px | 大间距（卡片布局 gap、内容块间距） |
| `--space-10` | `2.5rem` | 40px | 加大间距（标题与卡片区域间距） |
| `--space-12` | `3rem` | 48px | Section 内上下间距 |
| `--space-16` | `4rem` | 64px | Section 之间间距（小） |
| `--space-20` | `5rem` | 80px | Section 之间间距（中） |
| `--space-24` | `6rem` | 96px | Section 之间间距（大） |
| `--space-32` | `8rem` | 128px | Hero 与第一个 Section 间距 |
| `--space-40` | `10rem` | 160px | 页面级上下留白 |

---

## 4.3 关键间距规则

### Section 间距

```
Hero → 第一个 Section:     --space-32  (128px)
普通 Section → Section:     --space-24  (96px)
紧密 Section → Section:     --space-20  (80px)
Section 内标题 → 内容:      --space-10  (40px)
Section 内标题 → 副标题:    --space-4   (16px)
```

### 卡片间距

```
卡片网格 gap:               --space-6   (24px)
卡片内边距:                  --space-6   (24px) 水平 + --space-6 (24px) 垂直
卡片内标题 → 描述:          --space-3   (12px)
卡片内描述 → 链接:          --space-4   (16px)
```

### 文字间距

```
段落间距:                   1.5em
标题 → 正文:                --space-5   (20px)
列表项间距:                  --space-2   (8px)
```

### 按钮间距

```
按钮内边距（中）:           --space-3 (12px) 垂直 + --space-6 (24px) 水平
按钮内边距（大）:           --space-4 (16px) 垂直 + --space-8 (32px) 水平
并排按钮间距:               --space-4 (16px)
```

---

## 4.4 CSS 变量定义

```css
:root {
  --space-0:  0;
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-5:  1.25rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;
}
```

---

---

# 5. 尺寸与断点

---

## 5.1 响应式断点

| 断点名 | 范围 | 设计列数 | 设计重点 |
|--------|------|----------|----------|
| **Mobile** | < 640px | 1 列 / 全宽 | 阅读体验、触控友好、导航简化 |
| **Tablet** | 640px – 1024px | 2 列 | 平衡展示、中等留白 |
| **Desktop** | 1024px – 1280px | 3 列 / 网格 | 完整布局、大留白 |
| **Large Desktop** | > 1280px | 3-4 列 | 最大留白、宽屏体验 |

---

## 5.2 容器最大宽度

| Token | 值 | 用途 |
|-------|-----|------|
| `--max-width-narrow` | `720px` | 文章正文、关于页内容、联系页内容 |
| `--max-width-default` | `1200px` | 页面内容容器（默认） |
| `--max-width-wide` | `1400px` | 作品网格、服务卡片（需要更多空间） |

---

## 5.3 Header & Footer 高度

| Token | 值 | 说明 |
|-------|-----|------|
| `--header-height` | `64px` | 桌面端导航高度 |
| `--header-height-mobile` | `56px` | 移动端导航高度 |

---

## 5.4 CSS 变量定义

```css
:root {
  --max-width-narrow:  720px;
  --max-width-default: 1200px;
  --max-width-wide:    1400px;

  --header-height:        64px;
  --header-height-mobile: 56px;
}
```

---

---

# 6. 圆角与阴影

---

## 6.1 圆角

| Token | 值 | 用途 |
|-------|-----|------|
| `--radius-none` | `0` | 无圆角（极少使用） |
| `--radius-sm` | `4px` | 标签、小徽章、键盘按键样式 |
| `--radius-md` | `8px` | 卡片、输入框、按钮（默认） |
| `--radius-lg` | `12px` | 大卡片、弹窗、特色卡片 |
| `--radius-xl` | `16px` | 图片容器、作品卡片 |
| `--radius-full` | `9999px` | 药丸形标签、头像、圆形图标容器 |

### 圆角使用规则

```
按钮:              --radius-md (8px)     ← 统一，不给不同大小不同圆角
输入框:            --radius-md (8px)
卡片:              --radius-lg (12px)
作品卡片:          --radius-xl (16px)
标签:              --radius-full (9999px)
图片:              --radius-lg (12px)
```

> **核心原则**: 全站圆角统一克制。不对同一类组件使用不同圆角。圆角越大越"柔和"，越小越"锐利"。本网站定位偏向锐利专业感，所以默认使用 8px。

---

## 6.2 阴影

| Token | 值 | 使用场景 |
|-------|-----|----------|
| `--shadow-none` | `none` | 默认状态 |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | 卡片默认悬浮、细微分层 |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | 卡片 hover、下拉菜单 |
| `--shadow-lg` | `0 10px 25px rgba(0,0,0,0.1)` | 弹窗、严重悬浮 |
| `--shadow-xl` | `0 20px 50px rgba(0,0,0,0.15)` | 全屏弹窗（极少使用） |

### 阴影使用规则

```
卡片（默认）:       --shadow-sm     ← 极淡的阴影，仅暗示分层
卡片（hover）:      --shadow-md     ← hover 时阴影加深
Header（滚动后）:   --shadow-sm     ← 滚动后加阴影，分离导航与内容
模态弹窗:           --shadow-lg     ← 需要明确的分层感
```

> **核心原则**: 阴影的作用是暗示层级，不是装饰。不透明度控制在 0.05-0.1 之间，保持微妙。

---

## 6.3 CSS 变量定义

```css
:root {
  /* 圆角 */
  --radius-none: 0;
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.15);
}
```

---

---

# 7. 动效系统

---

## 7.1 设计理念

> 动画的唯一目的是辅助用户理解。每一次动效都应该让用户更清楚发生了什么，而不是更困惑。

三条铁律：
1. **快**: 过渡时间不超过 400ms
2. **淡**: 透明度变化为主，位移为辅
3. **少**: 一个页面不超过 3 种动画类型

---

## 7.2 过渡时间

| Token | 值 | 用途 |
|-------|-----|------|
| `--transition-fast` | `150ms ease` | 微小交互：hover 颜色变化、图标状态切换 |
| `--transition-normal` | `250ms ease` | 常规过渡：卡片 hover、按钮状态 |
| `--transition-slow` | `400ms ease` | 入场动画：Section 滚动入场、FAQ 展开 |

---

## 7.3 缓动函数

| Token | 值 | 用途 |
|-------|-----|------|
| `--ease-default` | `ease` | 默认过渡 |
| `--ease-in` | `ease-in` | 元素消失/关闭 |
| `--ease-out` | `ease-out` | 元素出现/打开 |
| `--ease-in-out` | `ease-in-out` | 循环动画、来回移动 |

---

## 7.4 动画清单

本网站 V1 只允许以下动画：

### 1. 滚动入场（Scroll Reveal）

```
触发方式: Intersection Observer
动画:      opacity 0→1 + translateY 20px→0
时长:      400ms
缓动:      ease-out
延迟:      无（或按卡片顺序轻微 stagger，间隔 50ms）
适用范围:  Section 标题、卡片网格、流程步骤
不适用:    Hero（应立即可见）、Footer
```

**CSS 实现**:
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 2. 卡片悬浮（Card Hover）

```
触发方式: 鼠标 hover
动画:      translateY(-4px) + shadow 变化
时长:      250ms
缓动:      ease
适用范围:  作品卡片、服务卡片
```

**CSS 实现**:
```css
.card {
  transition: transform 250ms ease, box-shadow 250ms ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

### 3. 按钮状态切换（Button State）

```
触发方式: 鼠标 hover / focus / active
动画:     背景色变化、边框色变化
时长:      150ms
缓动:      ease
适用范围:  所有按钮
```

### 4. FAQ 折叠面板展开（Accordion）

```
触发方式: 点击
动画:      max-height 展开/收起 + icon 旋转
时长:      300ms
缓动:      ease-in-out
适用范围:  FAQ 区域
```

### 5. Header 背景变化

```
触发方式: 页面滚动
动画:      背景透明度 0→1 + 阴影
时长:      200ms
适用范围:  Header
```

### 6. 图片/链接 Hover

```
触发方式: 鼠标 hover
动画:      opacity 轻微变化 (1→0.85)
时长:      150ms
适用范围:  图片、文字链接
```

---

## 7.5 明确禁止的动画

- ❌ 页面加载时的全屏动画（延长首屏时间）
- ❌ 持续循环的动画（分散注意力）
- ❌ 视差滚动（性能杀手、多余）
- ❌ 光标跟随效果（廉价感）
- ❌ 文字逐字出现动画（太慢、像模板）
- ❌ 纯 CSS 炫技动画（与本网站定位不符）

---

## 7.6 CSS 变量定义

```css
:root {
  --transition-fast:   150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow:   400ms ease;

  --ease-default:  ease;
  --ease-in:       ease-in;
  --ease-out:      ease-out;
  --ease-in-out:   ease-in-out;
}
```

---

---

# 8. 图标系统

---

## 8.1 设计理念

> 图标是辅助元素，不应成为视觉焦点。使用一致的描边粗细和尺寸。

---

## 8.2 技术方案

**V1 方案**: SVG Sprite（一个 SVG 文件集中管理图标，通过 `<use>` 引用）

**不使用的方案**:
- ❌ 图标字体（Icon Font）：可访问性差、渲染不稳定
- ❌ PNG/SVG 单文件：管理混乱
- ✅ SVG Sprite：加载一次、全局引用、颜色可控

---

## 8.3 图标规格

| 属性 | 值 |
|------|-----|
| **画布尺寸** | 24×24px |
| **描边粗细** | 2px |
| **风格** | 线性图标（outline），不使用填充 |
| **颜色** | 继承文字颜色（`currentColor`） |
| **圆角** | 2px（`stroke-linejoin: round`） |

---

## 8.4 常用图标尺寸

| 场景 | 渲染尺寸 | 说明 |
|------|----------|------|
| 导航 / 按钮内 | 20×20px | 与文字对齐 |
| 卡片图标 | 32×32px | 服务卡片、功能图标 |
| Section 装饰图标 | 48×48px | Hero 或大模块 |
| 社交图标 | 20×20px | Footer |
| Favicon | 32×32px | 浏览器标签 |

---

## 8.5 SVG Sprite 结构

```html
<!-- icons.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
  <symbol id="icon-arrow-right" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </symbol>
  <!-- 更多图标... -->
</svg>
```

```html
<!-- 使用方式 -->
<svg class="icon" width="20" height="20" aria-hidden="true">
  <use href="assets/icons/icons.svg#icon-arrow-right"/>
</svg>
```

---

## 8.6 V1 必需图标清单

| 图标名 | 用途 |
|--------|------|
| `arrow-right` | 链接箭头、CTA 按钮 |
| `arrow-up` | 回到顶部 |
| `arrow-down` | 展开/收起 |
| `check` | 列表勾选、成功 |
| `close` | 关闭、取消 |
| `menu` | 移动端导航 |
| `mail` | 邮箱联系 |
| `external-link` | 外部链接 |
| `code` | 开发相关 |
| `robot` / `sparkles` | AI 相关 |
| `globe` | 网站开发 |
| `smartphone` | 小程序 |
| `github` | GitHub 链接 |
| `twitter` / `x` | 社交媒体 |
| `rss` | RSS 订阅 |
| `chevron-left` / `chevron-right` | 左右翻页 |
| `search` | 搜索 |
| `calendar` | 日期 |
| `clock` | 时间/交付周期 |
| `tag` | 标签 |

---

---

# 9. 组件规范

---

## 9.1 按钮（Button）

### 变体

| 变体 | 使用场景 | 视觉特征 |
|------|----------|----------|
| **Primary** | 主要 CTA（Hero、Section 底部） | 蓝色填充背景 + 白色文字 |
| **Secondary** | 次要 CTA（与 Primary 并列） | 透明背景 + 灰色边框 + 黑色文字 |
| **Ghost** | 最低优先级的操作 | 透明背景 + 无边框 + 黑色文字 |
| **Text Link** | 内联文字链接 | 蓝色文字 + 下划线（hover） |

### 尺寸

| 尺寸 | 高度 | 水平内边距 | 字号 | 使用场景 |
|------|------|-----------|------|----------|
| **Large** | 52px | 32px | `--text-lg` (18px) | Hero CTA |
| **Medium** | 44px | 24px | `--text-base` (16px) | 默认按钮 |
| **Small** | 36px | 16px | `--text-sm` (14px) | 卡片内按钮、标签 |

### 状态

| 状态 | Primary | Secondary | Ghost | Text Link |
|------|---------|-----------|-------|-----------|
| **Default** | 蓝色背景 | 灰色边框 | 透明 | 蓝色文字 |
| **Hover** | `--color-accent-light` | 背景变浅灰 | 背景变浅灰 | 文字加深 + 下划线 |
| **Active** | `--color-accent-dark` | 背景更深灰 | 背景更深灰 | 文字更深 |
| **Focus** | 蓝色背景 + 2px 蓝色 outline（offset: 2px） | 同 Primary | 同 Primary | 同 Primary |
| **Disabled** | `--color-gray-300` 背景 | 灰色文字 + 灰色边框 | 灰色文字 | 灰色文字、无下划线 |

### CSS 规范

```css
/* Primary Button - Medium */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  height: 44px;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: 1;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-fast),
              color var(--transition-fast),
              border-color var(--transition-fast);
  white-space: nowrap;
}

.btn--primary {
  background-color: var(--color-accent);
  color: var(--color-white);
}
.btn--primary:hover {
  background-color: var(--color-accent-light);
}
.btn--primary:active {
  background-color: var(--color-accent-dark);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-gray-700);
  border-color: var(--color-gray-300);
}
.btn--secondary:hover {
  background-color: var(--color-gray-100);
  border-color: var(--color-gray-400);
}
.btn--secondary:active {
  background-color: var(--color-gray-200);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-gray-700);
  border-color: transparent;
}
.btn--ghost:hover {
  background-color: var(--color-gray-100);
}
.btn--ghost:active {
  background-color: var(--color-gray-200);
}

/* 尺寸变体 */
.btn--lg { height: 52px; padding: var(--space-4) var(--space-8); font-size: var(--text-lg); }
.btn--sm { height: 36px; padding: var(--space-2) var(--space-4); font-size: var(--text-sm); }

/* 禁用态 */
.btn:disabled,
.btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Focus 环 */
.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

## 9.2 卡片（Card）

### 变体

| 变体 | 特征 | 使用场景 |
|------|------|----------|
| **Elevated** | 白色背景 + 极淡阴影 | 作品卡片、服务卡片（默认） |
| **Outlined** | 白色背景 + 灰色边框 | 功能列表、信息卡片 |
| **Flat** | 浅灰背景 + 无边框无阴影 | 博客文章卡片、辅助卡片 |

### 尺寸

| 属性 | 值 |
|------|-----|
| **内边距** | 24px（`--space-6`） |
| **圆角** | 12px（`--radius-lg`）→ 作品卡片 16px（`--radius-xl`）|
| **边框** | 1px solid `--color-gray-200`（仅 Outlined 变体）|
| **阴影** | `--shadow-sm`（Elevated）；无（Outlined, Flat） |

### CSS 规范

```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;  /* 让图片不超出圆角 */
}

.card--elevated {
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal);
}
.card--elevated:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card--outlined {
  border: 1px solid var(--color-gray-200);
}

.card--flat {
  background-color: var(--color-gray-100);
}

/* 卡片内边距容器 */
.card__body {
  padding: var(--space-6);
}

/* 卡片图片 */
.card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}
```

---

## 9.3 输入框（Input / Textarea）

### 状态

| 状态 | 边框 | 背景 |
|------|------|------|
| **Default** | `--color-gray-300` | `--color-white` |
| **Hover** | `--color-gray-400` | `--color-white` |
| **Focus** | `--color-accent` + 2px 蓝色 outline | `--color-white` |
| **Error** | `--color-error` | `--color-error-bg` |
| **Disabled** | `--color-gray-200` | `--color-gray-100` |

### CSS 规范

```css
.form-input,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-gray-700);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast),
              box-shadow var(--transition-fast);
  outline: none;
}

.form-input:hover,
.form-textarea:hover {
  border-color: var(--color-gray-400);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-bg);
}

.form-input--error,
.form-textarea--error {
  border-color: var(--color-error);
  background-color: var(--color-error-bg);
}

.form-input:disabled,
.form-textarea:disabled {
  background-color: var(--color-gray-100);
  border-color: var(--color-gray-200);
  color: var(--color-gray-500);
  cursor: not-allowed;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}
```

---

## 9.4 标签（Tag / Badge）

### 变体

| 变体 | 背景 | 文字 | 边框 | 用途 |
|------|------|------|------|------|
| **Default** | `--color-gray-100` | `--color-gray-700` | 无 | 通用标签 |
| **Accent** | `--color-accent-bg` | `--color-accent` | 无 | 技术栈、强调标签 |
| **Outlined** | 透明 | `--color-gray-600` | `--color-gray-300` | 筛选按钮 |

### CSS 规范

```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: 1.5;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.tag--default {
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
}

.tag--accent {
  background-color: var(--color-accent-bg);
  color: var(--color-accent);
}

.tag--outlined {
  background-color: transparent;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-300);
}
```

---

## 9.5 分隔线（Divider）

### 规范

| 属性 | 值 |
|------|-----|
| **颜色** | `--color-gray-200`（默认）、`--color-gray-100`（浅） |
| **粗细** | 1px |
| **上下间距** | `--space-8` (32px)（Section 间）、`--space-4` (16px)（内容间） |
| **全宽/内缩** | 根据上下文决定。卡片内分隔线左对齐、不缩进。 |

---

## 9.6 链接（Link）

### 变体

| 变体 | 默认 | Hover | 用途 |
|------|------|-------|------|
| **Inline Link** | 蓝色文字、无下划线 | 蓝色加深 + 下划线 | 正文中链接 |
| **Nav Link** | `--color-gray-600`、无下划线 | `--color-gray-900` | 导航链接 |
| **Card Link** | 整个卡片可点击 | 卡片 hover 效果 | 作品卡片、服务卡片 |
| **Footer Link** | `--color-gray-400`、无下划线 | `--color-white` | Footer 链接 |

---

## 9.7 折叠面板（Accordion — FAQ）

### CSS 规范

```css
.accordion {
  border-bottom: 1px solid var(--color-gray-200);
}

.accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-5) 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-gray-800);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: color var(--transition-fast);
}

.accordion__trigger:hover {
  color: var(--color-accent);
}

.accordion__icon {
  flex-shrink: 0;
  margin-left: var(--space-4);
  transition: transform var(--transition-normal);
}

.accordion__trigger[aria-expanded="true"] .accordion__icon {
  transform: rotate(180deg);
}

.accordion__panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease-in-out;
}

.accordion__panel[aria-hidden="false"] {
  max-height: var(--panel-height);  /* 由 JS 动态计算 */
}

.accordion__content {
  padding-bottom: var(--space-5);
  color: var(--color-gray-600);
  line-height: var(--leading-relaxed);
}
```

---

## 9.8 导航栏（Header / Navbar）

### 结构

```
[Logo]                    [Nav Links] [CTA Button]
```

### 行为

| 状态 | 样式 |
|------|------|
| **页面顶部（未滚动）** | 背景透明（或 `--color-gray-50`），无阴影 |
| **滚动后** | 白色半透明背景（`rgba(255,255,255,0.85)`）+ `backdrop-filter: blur(12px)` + 底部阴影 |
| **移动端** | 汉堡菜单展开全屏导航，背景白色 |

### CSS 规范

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 var(--space-6);
  transition: background-color var(--transition-fast),
              box-shadow var(--transition-fast);
}

.header--scrolled {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width-default);
  margin: 0 auto;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.header__nav a {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-gray-600);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.header__nav a:hover,
.header__nav a.active {
  color: var(--color-gray-900);
}

/* 移动端汉堡菜单 */
.header__menu-btn {
  display: none;
  /* Mobile 时显示 */
}
```

---

## 9.9 页面底部（Footer）

### 结构

```
[Logo + 简短描述]
[导航链接列] [服务链接列] [社交媒体列]
[Copyright]
```

### CSS 规范

```css
.footer {
  background-color: var(--color-black);
  color: var(--color-gray-400);
  padding: var(--space-20) var(--space-6) var(--space-10);
}

.footer__inner {
  max-width: var(--max-width-default);
  margin: 0 auto;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-8);
  font-size: var(--text-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer a {
  color: var(--color-gray-400);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer a:hover {
  color: var(--color-white);
}
```

---

## 9.10 头像 / 个人照片

### 规范

| 属性 | 值 |
|------|-----|
| **形状** | 方形 + 12px 圆角（`--radius-lg`）；不作圆形 |
| **尺寸** | 关于页：200×200px；Hero 小图：80×80px |
| **风格** | 自然、专业、不摆拍、不过度修图 |
| **背景** | 简洁背景或无背景 |
| **边框** | 无，或 1px `--color-gray-200` |

---

---

# 10. 页面布局规范

---

## 10.1 通用页面结构

```
┌──────────────────────────────────────┐
│  Header (fixed, 64px)                │
├──────────────────────────────────────┤
│                                      │
│  Main Content                         │
│  ┌──────────────────────────────┐    │
│  │  Section                       │    │
│  │  max-width: 1200px             │    │
│  │  margin: 0 auto                │    │
│  │  padding: Section 间距          │    │
│  └──────────────────────────────┘    │
│  ┌──────────────────────────────┐    │
│  │  Section                       │    │
│  └──────────────────────────────┘    │
│  ...                                 │
│                                      │
├──────────────────────────────────────┤
│  Footer                              │
└──────────────────────────────────────┘
```

---

## 10.2 Section 布局模式

### 模式 A：单列居中（文章、关于）

```
max-width: 720px, margin: 0 auto
```
适用于：博客文章正文、关于页个人介绍、联系页内容。

### 模式 B：标题 + 2-3 列卡片网格（服务、作品）

```
标题居中
grid: 2-3 列, gap: 24px
```
适用于：服务列表、作品展示、功能对比。

### 模式 C：左图右文 / 左文右图（案例、特点）

```
2 列 (1fr 1fr), gap: 64px
```
适用于：为什么选择我、开发流程、案例展示。

### 模式 D：标题 + 列表（FAQ、技能）

```
max-width: 720px, margin: 0 auto
```
适用于：FAQ、技能清单、流程步骤。

### 模式 E：全宽 Hero

```
max-width: 900px, margin: 0 auto, text-align: center
```
适用于：Hero 区域、CTA 区域。

---

## 10.3 通用 CSS Layout

```css
/* 页面容器 */
.container {
  width: 100%;
  max-width: var(--max-width-default);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

.container--narrow {
  max-width: var(--max-width-narrow);
}

.container--wide {
  max-width: var(--max-width-wide);
}

/* Section */
.section {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.section--tight {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

/* Section 标题 */
.section__header {
  text-align: center;
  margin-bottom: var(--space-12);
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.section__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  color: var(--color-gray-900);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-4);
}

.section__subtitle {
  font-size: var(--text-lg);
  color: var(--color-gray-600);
  line-height: var(--leading-relaxed);
}

/* 网格布局 */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}
```

---

---

# 11. 响应式设计规范

---

## 11.1 渐进式适配策略

> 桌面端优先（Desktop First），然后向下适配 Tablet 和 Mobile。

---

## 11.2 断点定义

```css
/* Tablet: ≤1024px */
@media (max-width: 1024px) { }

/* Mobile: ≤640px */
@media (max-width: 640px) { }

/* 特殊：小屏手机 ≤375px */
@media (max-width: 375px) { }
```

---

## 11.3 各断点布局规则

### Desktop (>1024px)

| 元素 | 规则 |
|------|------|
| 导航 | 水平展开全部链接 |
| 网格 | 3-4 列 |
| Section 间距 | `--space-24` (96px) 上下 |
| 卡片 | hover 效果启用 |
| 字体 | 正常层级 |

### Tablet (640px – 1024px)

| 元素 | 规则 |
|------|------|
| 导航 | 水平展开（如果放得下）或收起为汉堡菜单 |
| 网格 | 2 列 |
| Section 间距 | `--space-20` (80px) 上下 |
| Hero 大标题 | 字号减小（`--text-5xl` → `--text-4xl`） |
| 卡片 | hover 效果保留 |
| 2 列图文 | 改为上下堆叠（文字在上、图片在下） |

### Mobile (<640px)

| 元素 | 规则 |
|------|------|
| 导航 | 汉堡菜单（全屏覆盖式） |
| 网格 | 1 列（全宽） |
| Section 间距 | `--space-16` (64px) 上下 |
| 所有标题 | 字号减小一档 |
| Hero 大标题 | `--text-4xl` (36px) |
| Section 标题 | `--text-3xl` (30px) |
| 卡片 | 无 hover 效果（触控设备） |
| 按钮 | 全宽（`width: 100%`） |
| Footer 网格 | 2 列 → 1 列 |
| 容器内边距 | `--space-4` (16px) 左右 |
| 移动端汉堡菜单 | 全屏白色背景、链接竖向排列、大字号 |

---

## 11.4 响应式字体

```css
@media (max-width: 640px) {
  :root {
    --text-6xl: 2.25rem;   /* 60px → 36px */
    --text-5xl: 1.875rem;  /* 48px → 30px */
    --text-4xl: 1.5rem;    /* 36px → 24px */
    --text-3xl: 1.25rem;   /* 30px → 20px */
  }
}
```

---

## 11.5 响应式间距

```css
@media (max-width: 640px) {
  .section {
    padding-top: var(--space-16);     /* 96px → 64px */
    padding-bottom: var(--space-16);
  }

  .section__header {
    margin-bottom: var(--space-8);    /* 48px → 32px */
  }
}
```

---

## 11.6 触控设备适配

```
- 所有可点击区域最小尺寸: 44×44px
- 链接间距不小于: 8px
- 表单输入框高度: ≥44px
- 段落行高在移动端增加为: 1.75
- 字号移动端不小于: 14px
```

---

---

# 12. 可访问性规范

---

## 12.1 色彩对比度

| 元素 | 最低比例 | 目标比例 |
|------|----------|----------|
| 正文文字（<18px） | 4.5:1 | 7:1 |
| 大号文字（≥18px 或 ≥14px Bold） | 3:1 | 4.5:1 |
| 图标、边框 | 3:1 | — |

**本网站关键对比度验证**:
- `#404040` 文字 on `#FAFAFA` 背景 → 约 7.5:1 ✅
- `#737373` 文字 on `#FAFAFA` 背景 → 约 5.2:1 ✅ (仅用于辅助文字)
- `#2563EB` 文字 on `#FFFFFF` 背景 → 约 4.6:1 ⚠️ (仅用于 ≥18px 的链接文字)

---

## 12.2 键盘访问

```
- 所有交互元素必须可通过 Tab 键到达
- Focus 顺序符合视觉顺序
- 所有按钮和链接有 visible focus 环（`:focus-visible`）
- 不使用 `tabindex` > 0
- FAQ 折叠面板支持 Enter/Space 键切换
- 汉堡菜单支持 Escape 键关闭
```

---

## 12.3 语义化 HTML

```html
<header>           <!-- 页头导航 -->
<main>             <!-- 主要内容 -->
<nav>              <!-- 导航 -->
<section>          <!-- 内容区块（每个 Section 配有 aria-labelledby） -->
<article>          <!-- 博客文章、作品详情 -->
<aside>            <!-- 侧边栏（博客） -->
<footer>           <!-- 页脚 -->
```

---

## 12.4 ARIA 规范

| 组件 | ARIA 要求 |
|------|----------|
| Header 导航 | `<nav aria-label="主导航">` |
| 汉堡菜单按钮 | `aria-expanded="true/false"` + `aria-label="打开菜单"` |
| FAQ 折叠面板 | `aria-expanded` on trigger, `aria-hidden` on panel, `aria-labelledby` 关联 |
| 联系表单 | `aria-required="true"` on 必填字段, `aria-describedby` on 错误提示 |
| 图标 | `aria-hidden="true"`（纯装饰性） |
| Section | `aria-labelledby` 指向 section 标题 |

---

## 12.5 其他

```
- `<html lang="zh-CN">`
- 所有图片有 `alt` 属性（装饰性图片 `alt=""`）
- `prefers-reduced-motion` 媒体查询：关闭所有动画
- 表单错误提示与输入框关联（`aria-describedby`）
- 跳过导航链接（Skip to content）
```

### 减弱动画支持

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

---

# 13. 设计检查清单

---

## 13.1 开发前检查

- [ ] 颜色使用了 CSS 变量，没有硬编码色值
- [ ] 字体大小使用了 CSS 变量，没有硬编码字号
- [ ] 间距使用了 CSS 变量，没有硬编码间距值
- [ ] 组件遵循 BEM 命名规范
- [ ] 新增组件已在本 Design System 文档中定义

---

## 13.2 页面检查

- [ ] 每个页面只有一个 h1
- [ ] 标题层级正确（h1→h2→h3 不跳级）
- [ ] 所有图片有 alt 属性
- [ ] 颜色对比度达标（正文 ≥4.5:1）
- [ ] 桌面端每行正文 ≤75 字符
- [ ] 移动端每行正文 ≤55 字符
- [ ] 无硬编码的像素值用于布局（使用 rem 或 CSS 变量）

---

## 13.3 响应式检查

- [ ] 375px 宽度下所有内容可读
- [ ] 768px 宽度下布局正常
- [ ] 1024px 宽度下交互正常
- [ ] 所有可点击区域 ≥44×44px（移动端）
- [ ] 无水平滚动条

---

## 13.4 动效检查

- [ ] 无纯装饰性的循环动画
- [ ] 过渡时间 ≤400ms
- [ ] `prefers-reduced-motion` 下动画被禁用
- [ ] 滚动入场动画不阻止用户阅读内容

---

## 13.5 可访问性检查

- [ ] Tab 键可到达所有交互元素
- [ ] Focus 环可见
- [ ] 表单输入框有关联的 label
- [ ] 错误提示与输入框关联
- [ ] 汉堡菜单可用键盘操作
- [ ] 跳过导航链接可用

---

## 13.6 性能检查

- [ ] 无多余字体文件（使用系统字体栈）
- [ ] 所有图片经过压缩
- [ ] 大图使用 WebP 格式 + JPG 降级
- [ ] 图片使用 `loading="lazy"`（除首屏关键图片）
- [ ] CSS 文件按需加载（页面特定样式延迟加载）
- [ ] JS 使用 `defer` 加载

---

---

> **本文档结束。**
>
> Design System 是网站视觉一致性的唯一保障。
> 所有 UI 开发必须严格遵循本文档中的 Token 和规范。
> 如需新增或修改设计规范，请先更新本文档，再修改代码。
