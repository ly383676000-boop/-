# HONG KONG COOKIES TRADING LIMITED - UI设计规范文档 V2

## 项目概述
- **公司名称**: HONG KONG COOKIES TRADING LIMITED
- **产品类型**: 烟具 (Glass Pipe, Bong, Vaporizer, Grinder等)
- **目标市场**: 海外外贸客户
- **风格**: 高端、专业、现代、干净
- **货币**: 美元 USD
- **语言**: 中英文切换

---

## 1. 视觉设计系统

### 1.1 配色方案（专业外贸风格）

#### 主色调 (Primary Colors)
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| 深墨绿 | `#1B4332` | 导航栏背景、主要按钮、品牌标识（首选） |
| 深蓝绿 | `#0D3B3B` | 备选主色、页脚背景 |
| 墨绿深色 | `#143728` | 悬停状态、深色强调 |

#### 强调色 (Accent Colors) - 高端金色系
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| 琥珀金 | `#D4A574` | CTA按钮、促销标签、价格强调（首选） |
| 深金色 | `#C9A227` | 备选金色、特殊状态 |
| 玫瑰金 | `#B76E79` | 限供应标识、特殊产品 |
| 古铜色 | `#8B6914` | 深色强调、金色悬停 |

#### 背景色 (Background Colors)
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| 纯白 | `#FFFFFF` | 页面主背景、卡片背景 |
| 浅灰 | `#F8F9FA` | 区块背景、交替行 |
| 米白 | `#F5F5F0` | 产品详情背景、次要背景 |
| 冷灰 | `#E8ECEF` | 边框、分隔线 |

#### 文字色 (Text Colors)
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| 标题黑 | `#212529` | 主标题、重要文字（首选） |
| 正文灰 | `#495057` | 正文内容 |
| 次要灰 | `#6C757D` | 辅助文字、描述 |
| 浅灰文字 | `#ADB5BD` | 占位符、禁用状态 |

#### 禁止使用的颜色
- ❌ 荧光色（Neon Green #39FF14, Hot Pink #FF69B4等）
- ❌ 过于鲜艳的橙色（#FF6600, #FF4500）
- ❌ 高饱和度颜色
- ❌ 渐变色背景（除Hero Banner外）

### 1.2 字体系统

#### 字体选择
| 用途 | 字体 | 说明 |
|-----|------|------|
| **标题字体** | `Poppins` | 现代、几何感、专业（首选） |
| 备选标题 | `Montserrat` | 优雅、现代（备选） |
| **正文字体** | `Inter` | 清晰、易读、专业（首选） |
| 备选正文 | `Open Sans` | 干净、易读（备选） |
| **价格字体** | `Roboto Mono` | 等宽、专业、数据展示 |
| **中文字体** | `PingFang SC`, `Microsoft YaHei`, `Noto Sans SC` | 中文显示 |

#### 字体层级
| 层级 | 尺寸 | 字重 | 行高 | 用途 |
|-----|------|------|------|------|
| H1 | 36px / 2.25rem | 700 (Bold) | 1.2 | 页面主标题 |
| H2 | 28px / 1.75rem | 600 (SemiBold) | 1.3 | 区块标题 |
| H3 | 22px / 1.375rem | 600 (SemiBold) | 1.4 | 卡片标题 |
| H4 | 18px / 1.125rem | 500 (Medium) | 1.4 | 小标题 |
| Body | 16px / 1rem | 400 (Regular) | 1.6 | 正文 |
| Small | 14px / 0.875rem | 400 (Regular) | 1.5 | 辅助文字 |
| Caption | 12px / 0.75rem | 400 (Regular) | 1.4 | 标签、注释 |
| Price | 20px / 1.25rem | 500 (Medium) | 1.2 | 产品价格 |

#### Google Fonts 引入
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 1.3 间距系统

#### 基础单位: 8px

| Token | 值 | 用途 |
|-------|-----|------|
| 0 | 0px | 无间距 |
| xs | 4px | 紧凑间距 |
| sm | 8px | 小间距 |
| md | 16px | 标准间距 |
| lg | 24px | 中等间距 |
| xl | 32px | 大间距 |
| 2xl | 48px | 区块间距 |
| 3xl | 64px | 大区块间距 |
| 4xl | 80px | 页面区块 |

#### 圆角规范
| Token | 值 | 用途 |
|-------|-----|------|
| none | 0 | 直角设计（特殊场景） |
| sm | 4px | 小元素 |
| md | 8px | 卡片、输入框、按钮 |
| lg | 12px | 大卡片、模态框 |
| xl | 16px | 特色卡片 |
| full | 9999px | 胶囊按钮、头像 |

---

## 2. 布局结构

### 2.1 页面整体布局

```
┌─────────────────────────────────────────────────────────────┐
│                      顶部导航栏 (Header)                      │
│                    固定定位，高度 72px                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      Hero Banner                            │
│                    全宽，高度 500-600px                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      内容区域                                │
│                   最大宽度 1400px                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                        页脚 (Footer)                         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 导航栏 (Header)

#### 结构
```
┌───────────────────────────────────────────────────────────────────────┐
│  [Logo区域]           [搜索框                          ]  [购物车] [语言]│
├───────────────────────────────────────────────────────────────────────┤
│  [首页 Home]  [产品 Products ▼]  [关于我们 About]  [联系 Contact]    │
└───────────────────────────────────────────────────────────────────────┘
```

#### 设计规范
| 属性 | 值 |
|-----|---|
| **高度** | 72px (主栏) |
| **背景** | `#1B4332` (深墨绿) |
| **Logo高度** | 左侧，高度 44px |
| **搜索框** | 居中，宽度 max 480px，圆角 8px，背景白色 |
| **购物车图标** | 右侧，带数量徽章，颜色白色 |
| **语言切换** | 下拉菜单，显示 "中/EN" |
| **导航链接** | 白色文字，悬停下划线 |
| **固定定位** | `position: fixed`, `z-index: 1000` |
| **底部阴影** | `0 2px 8px rgba(0,0,0,0.1)` |

#### 导航链接状态
- **默认**: 白色文字，opacity 1
- **悬停**: 下方出现金色下划线 `#D4A574`
- **激活**: 金色下划线，白色文字

### 2.3 公司LOGO区域

#### 设计规范
```
┌────────────────────────────────────────┐
│                                        │
│     🍪  HONG KONG COOKIES              │
│         TRADING LIMITED               │
│                                        │
└────────────────────────────────────────┘
```

| 属性 | 规范 |
|-----|------|
| **主文字** | "HONG KONG COOKIES" |
| **副文字** | "TRADING LIMITED" |
| **字体** | Poppins, Bold (700) |
| **主文字大小** | 24px |
| **副文字大小** | 14px |
| **主文字颜色** | `#FFFFFF` |
| **副文字颜色** | `#D4A574` (金色) |
| **字母间距** | 主文字 2px，副文字 3px |
| **图标** | 可选：简约饼干图标或树叶图标（代表天然） |

#### LOGO变体
| 使用场景 | 样式 |
|---------|------|
| 深色背景（导航栏） | 白字 + 金色副标题 |
| 浅色背景 | 深绿主文字 + 金色副标题 |
| 页脚 | 半透明白字 + 金色副标题 |

### 2.4 Hero Banner

#### 设计规范
| 属性 | 值 |
|-----|---|
| **宽度** | 100% 全宽 |
| **高度** | 桌面 500px，平板 400px，手机 300px |
| **内容位置** | 居中或左对齐 |
| **背景** | 单色渐变 或 高质量产品图 |
| **叠加层** | `rgba(27, 67, 50, 0.6)` 深绿遮罩 |

#### 内容结构
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   欢迎语 (H1, 白色, 粗体)                                    │
│   副标题 (H3, 白色半透明)                                   │
│                                                            │
│   [立即购买 Buy Now]  [查看产品 View Products]              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 2.5 产品网格布局

#### 响应式断点
| 设备 | 断点 | 列数 | 间距 | 卡片最小宽度 |
|-----|------|------|------|-------------|
| 超大桌面 | ≥1536px | 4列 | 24px | 300px |
| 桌面 | 1280px-1535px | 4列 | 24px | 280px |
| 小桌面 | 1024px-1279px | 3列 | 20px | 280px |
| 平板横屏 | 768px-1023px | 2列 | 20px | 320px |
| 平板竖屏 | 640px-767px | 2列 | 16px | 280px |
| 手机 | <640px | 1列 | 16px | 全宽 |

#### 容器规范
- **最大宽度**: 1400px
- **内边距**: 桌面 48px，平板 24px，手机 16px
- **居中方式**: `margin: 0 auto`

### 2.6 侧边购物车 (Slide-out Cart)

#### 结构
```
┌─────────────────────────────────┐
│  🛒 购物车 / Cart         [×]   │
├─────────────────────────────────┤
│  ┌─────┐ 产品名称            $XX│
│  │图片 │ 变体: 黑色 / M        │
│  │80x80│                    [×] │
│  └─────┘  × 1                  │
├─────────────────────────────────┤
│                                 │
│  小计 / Subtotal:     $XXX.XX  │
│                                 │
├─────────────────────────────────┤
│  [继续购物 Continue]             │
│  [去结算 Checkout]              │
└─────────────────────────────────┘
```

#### 设计规范
| 属性 | 值 |
|-----|---|
| **宽度** | 420px (桌面), 100% (手机) |
| **背景** | `#FFFFFF` |
| **遮罩层** | `rgba(0,0,0,0.5)` |
| **动画** | 从右侧滑入，300ms ease-out |
| **圆角** | 左侧 0，右侧 16px |
| **头部背景** | `#1B4332` |
| **头部文字** | 白色 |

### 2.7 页脚 (Footer)

#### 结构
```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  HONG KONG COOKIES        快速链接        联系方式      关注我们   │
│  TRADING LIMITED          Quick Links     Contact       Follow Us  │
│  ──────────────           ──────────      ─────────     ─────────  │
│                                                                    │
│  专注于高品质烟具        全部产品         邮箱:          社交媒体   │
│  出口贸易                All Products     info@...       图标      │
│  Professional smoke                      电话:                      │
│  pipe export              新品上市         Phone:                     │
│                           New Arrivals    地址:                      │
│                           热销产品         Address:                   │
│                           Best Sellers                                │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  © 2024 HONG KONG COOKIES TRADING LIMITED. All Rights Reserved.   │
└────────────────────────────────────────────────────────────────────┘
```

#### 设计规范
| 属性 | 值 |
|-----|---|
| **背景** | `#0D3B3B` (深蓝绿，与主色形成对比) |
| **文字颜色** | 白色 `#FFFFFF` / 浅灰 `#CCCCCC` |
| **链接悬停** | `#D4A574` (金色) |
| **内边距** | 64px 垂直，48px 水平 |
| **标题** | 18px, Poppins Bold, 白色 |
| **链接** | 14px, Inter, `#CCCCCC` |
| **版权行** | 顶部边框 1px `#2D4A4A` |

---

## 3. 组件设计

### 3.1 产品卡片

#### 结构
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│            [产品图片]                    │
│            比例: 3:4                    │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  BRAND NAME                            │
│  产品名称 Product Name                   │
│  $XX.XX                                │
│                                         │
│  [●] [●] [●] 颜色选项                   │
│                                         │
└─────────────────────────────────────────┘
```

#### 设计规范
| 属性 | 默认状态 | 悬停状态 (Hover) |
|-----|---------|-----------------|
| **背景** | `#FFFFFF` | `#FFFFFF` |
| **边框** | 无 | 无 |
| **圆角** | 12px | 12px |
| **阴影** | `0 1px 3px rgba(0,0,0,0.08)` | `0 8px 24px rgba(0,0,0,0.15)` |
| **图片缩放** | 1 | scale(1.05) |
| **图片高度** | 220px | - |
| **图片比例** | 3:4 (垂直矩形) | - |
| **图片圆角** | 12px 12px 0 0 | - |
| **过渡动画** | - | 300ms ease-out |

#### 卡片内部元素
| 元素 | 样式 |
|-----|------|
| **品牌名** | 12px, Poppins, `#6C757D`, 大写, 字母间距 1px |
| **产品名** | 16px, Inter, `#212529`, 500字重, 最多2行 |
| **价格** | 18px, Roboto Mono, `#D4A574`, 500字重 |
| **颜色选项** | 16px 圆形色块, 间距 6px, 边框 2px 白色 |

#### Hover 效果详解
```css
.product-card {
  transition: all 0.3s ease-out;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-card .product-image {
  transition: transform 0.3s ease-out;
}
```

### 3.2 变体选择器

#### 颜色选择器
```
颜色 / Color: [●] [●] [●] [●] [○+]
              红  蓝  绿  黑  更多
```
| 属性 | 值 |
|-----|---|
| **圆形尺寸** | 24px |
| **边框** | 选中时 2px `#1B4332` |
| **悬停** | scale(1.15), 200ms |
| **间距** | 8px |

#### 尺寸/规格选择器
```
尺寸 / Size: [ S ] [ M ] [ L ] [ XL ] [ XXL ]
```
| 属性 | 默认状态 | 选中状态 |
|-----|---------|---------|
| **背景** | `#F8F9FA` | `#1B4332` |
| **文字** | `#495057` | `#FFFFFF` |
| **边框** | 1px `#DEE2E6` | 无 |
| **圆角** | 6px | 6px |
| **禁用** | opacity 0.4, cursor not-allowed | - |

#### 下拉选择器
```
材质 / Material: [ 玻璃 Glass ▼ ]
```
| 属性 | 值 |
|-----|---|
| **高度** | 44px |
| **边框** | 1px `#DEE2E6` |
| **圆角** | 8px |
| **聚焦** | border-color `#1B4332`, 阴影 `0 0 0 3px rgba(27,67,50,0.1)` |

### 3.3 购物车图标

| 属性 | 值 |
|-----|---|
| **位置** | 导航栏右上角 |
| **图标** | ShoppingCart (Lucide Icons) |
| **尺寸** | 24px |
| **颜色** | `#FFFFFF` |
| **悬停** | opacity 0.8 |
| **数量徽章** | |
| - 位置 | 图标右上角，偏移 -8px, -8px |
| - 背景 | `#D4A574` (金色) |
| - 文字 | `#FFFFFF`, 11px, Bold |
| - 尺寸 | 20px 圆形 |
| - 最小宽度 | 20px (双位数时) |

### 3.4 按钮系统

#### 主要按钮 (Primary Button)
```css
{
  background: #1B4332;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
:hover {
  background: #143728;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(27,67,50,0.3);
}
:active {
  transform: translateY(0);
}
```

#### 强调按钮 (Accent Button) - 金色
```css
{
  background: #D4A574;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
:hover {
  background: #C9A227;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(212,165,116,0.4);
}
```

#### 次要按钮 (Secondary Button)
```css
{
  background: transparent;
  color: #1B4332;
  padding: 12px 26px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border: 2px solid #1B4332;
  cursor: pointer;
  transition: all 0.2s ease;
}
:hover {
  background: #1B4332;
  color: #FFFFFF;
}
```

#### 幽灵按钮 (Ghost Button)
```css
{
  background: transparent;
  color: #495057;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}
:hover {
  background: #F8F9FA;
}
```

#### 按钮尺寸变体
| 尺寸 | 内边距 | 字号 |
|-----|-------|------|
| Small | 8px 16px | 13px |
| Medium (默认) | 14px 28px | 15px |
| Large | 16px 32px | 16px |

### 3.5 语言切换器

#### 设计规范
```
┌─────────────────┐
│  🌍 中 / EN  ▼  │
└─────────────────┘
```
| 属性 | 值 |
|-----|---|
| **样式** | 按钮样式，带下拉箭头 |
| **背景** | transparent |
| **文字** | `#FFFFFF` (导航栏内) |
| **悬停** | 背景 rgba(255,255,255,0.1) |
| **下拉菜单** | |
| - 背景 | `#FFFFFF` |
| - 阴影 | `0 4px 12px rgba(0,0,0,0.15)` |
| - 圆角 | 8px |
| - 选项 | 中文 (简体), English |
| - 选中状态 | 左侧金色勾选 `#D4A574` |

### 3.6 表单输入框

#### 设计规范
| 属性 | 值 |
|-----|---|
| **高度** | 48px |
| **边框** | 1px `#DEE2E6` |
| **圆角** | 8px |
| **背景** | `#FFFFFF` |
| **文字** | `#212529` |
| **聚焦** | |
| - 边框 | `#1B4332` |
| - 阴影 | `0 0 0 3px rgba(27,67,50,0.1)` |
| **错误** | |
| - 边框 | `#DC3545` |
| - 阴影 | `0 0 0 3px rgba(220,53,69,0.1)` |
| - 提示文字 | `#DC3545`, 12px |

### 3.7 徽章与标签

#### 热销标签
```
┌──────────┐
│ 🔥 热销  │
│  HOT     │
└──────────┘
```
| 属性 | 值 |
|-----|---|
| **背景** | `#D4A574` (金色) |
| **文字** | `#FFFFFF`, 11px, Bold |
| **圆角** | 4px |
| **位置** | 产品卡片左上角 |

#### 新品标签
| 属性 | 值 |
|-----|---|
| **背景** | `#1B4332` (深绿) |
| **文字** | `#FFFFFF`, 11px, Bold |

#### 折扣标签
| 属性 | 值 |
|-----|---|
| **背景** | `#DC3545` (红色) |
| **文字** | `#FFFFFF`, 11px, Bold |
| **格式** | "-XX%" |

---

## 4. 页面设计

### 4.1 首页 (Home)

#### 布局结构
```
┌───────────────────────────────────────────────────────┐
│                    导航栏 Header                      │
├───────────────────────────────────────────────────────┤
│                                                       │
│                    Hero Banner                        │
│              全宽轮播，高度 500px                      │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│                 产品分类快捷入口                        │
│         [Glass Pipe] [Bong] [Vaporizer] [Grinder]   │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│                   热销产品                              │
│              Best Sellers                             │
│           ┌───┐ ┌───┐ ┌───┐ ┌───┐                   │
│           │   │ │   │ │   │ │   │                   │
│           └───┘ └───┘ └───┘ └───┘                   │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│                   新品上市                              │
│               New Arrivals                            │
│           ┌───┐ ┌───┐ ┌───┐ ┌───┐                   │
│           │   │ │   │ │   │ │   │                   │
│           └───┘ └───┘ └───┘ └───┘                   │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│                   公司优势                              │
│        ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│        │ 品质  │ │ 价格  │ │ 服务  │ │ 物流  │          │
│        │Quality│ │ Price│ │Service│ │Shipping│         │
│        └──────┘ └──────┘ └──────┘ └──────┘          │
│                                                       │
├───────────────────────────────────────────────────────┤
│                      页脚 Footer                        │
└───────────────────────────────────────────────────────┘
```

#### 公司优势区块
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│     🏆      │     💰      │     🤝      │     🚚      │
│             │             │             │             │
│   品质保障   │  批发价格   │  专业服务   │  全球配送   │
│   Quality   │  Wholesale  │   Service   │  Shipping   │
│   Assurance │    Price    │  Support   │ Worldwide   │
└─────────────┴─────────────┴─────────────┴─────────────┘
```
| 属性 | 值 |
|-----|---|
| **背景** | `#F8F9FA` |
| **内边距** | 64px 垂直 |
| **图标** | 48px, `#1B4332` |
| **标题** | 20px, Poppins 600, `#212529` |
| **描述** | 14px, Inter, `#6C757D` |

### 4.2 产品列表页 (Product List)

#### 布局结构
```
┌─────────────────────────────────────────────────────────────┐
│  面包屑: 首页 / Home > 产品 / Products > 烟斗 / Pipes        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  页面标题: 烟斗 Pipes                    [筛选 ▼] [排序 ▼]  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────┐  ┌────────────────────────────────────────┐ │
│  │           │  │                                        │ │
│  │  筛选侧边栏 │  │         产品网格 (3-4列)               │ │
│  │           │  │                                        │ │
│  │  分类      │  │   ┌────┐ ┌────┐ ┌────┐ ┌────┐        │ │
│  │  ├ 玻璃烟斗│  │   │    │ │    │ │    │ │    │        │ │
│  │  ├ 金属烟斗│  │   └────┘ └────┘ └────┘ └────┘        │ │
│  │  └ 硅胶烟斗│  │                                        │ │
│  │           │  │   ┌────┐ ┌────┐ ┌────┐ ┌────┐        │ │
│  │  价格范围  │  │   │    │ │    │ │    │ │    │        │ │
│  │  ───○────  │  │   └────┘ └────┘ └────┘ └────┘        │ │
│  │  $0 - $500 │  │                                        │ │
│  │           │  │              [分页控件]                 │ │
│  │  材质      │  │                                        │ │
│  │  ☑ 玻璃    │  └────────────────────────────────────────┘ │
│  │  ☑ 硅胶    │                                             │
│  │  ☑ 金属    │                                             │
│  │           │                                             │
│  │  品牌      │                                             │
│  │  ☑ 品牌A   │                                             │
│  │  ☑ 品牌B   │                                             │
│  │           │                                             │
│  │  [重置]    │                                             │
│  └───────────┘                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 筛选侧边栏
| 属性 | 值 |
|-----|---|
| **宽度** | 280px (桌面), 100% (移动端折叠) |
| **背景** | `#FFFFFF` |
| **边框** | 右侧 1px `#E8ECEF` |
| **标题** | 16px, Poppins 600 |
| **选项** | 14px, Inter, `#495057` |
| **复选框** | 20px, 选中色 `#1B4332` |

### 4.3 产品详情页 (Product Detail)

#### 布局结构
```
┌─────────────────────────────────────────────────────────────┐
│  面包屑: 首页 > 产品 > 玻璃烟斗 > 产品名称                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────┐  ┌────────────────────────────┐  │
│  │                      │  │                            │  │
│  │                      │  │  品牌: BRAND NAME          │  │
│  │      主图            │  │  产品名称 Product Name     │  │
│  │      800x1000        │  │                            │  │
│  │                      │  │  ★★★★★ (128 reviews)     │  │
│  │                      │  │                            │  │
│  ├──────────────────────┤  │  $XX.XX                   │  │
│  │ [缩] [略] [图] [列]  │  │                            │  │
│  └──────────────────────┘  │  颜色: [●] [●] [●]        │  │
│                            │  尺寸: [S] [M] [L] [XL]   │  │
│                            │  材质: [玻璃 ▼]            │  │
│                            │                            │  │
│                            │  数量: [ - ] [ 1 ] [ + ]  │  │
│                            │                            │  │
│                            │  [添加到购物车 Add to Cart] │  │
│                            │  [立即购买 Buy Now]        │  │
│                            │                            │  │
│                            │  [♡ 收藏]  [↗ 分享]        │  │
│                            └────────────────────────────┘  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [产品描述 Description] [规格参数 Specs] [评价 Reviews]     │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                                                     │  │
│   │              产品描述内容...                         │  │
│   │                                                     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    相关产品 Related Products                 │
│           ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐           │
│           │   │ │   │ │   │ │   │ │   │ │   │           │
│           └───┘ └───┘ └───┘ └───┘ └───┘ └───┘           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.4 购物车页 (Cart)

#### 布局结构
```
┌─────────────────────────────────────────────────────────────┐
│                 购物车 Your Cart (3件商品)                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌────────────────────────────────┐  ┌───────────────────┐ │
│  │                                │  │                   │ │
│  │   商品列表                      │  │   订单摘要        │ │
│  │                                │  │   Order Summary  │ │
│  │  ┌────┐  产品名称              │  │                   │ │
│  │  │    │  品牌 | 颜色: 黑色      │  │  ───────────────  │ │
│  │  │图片│  尺寸: M               │  │  小计 Subtotal:   │ │
│  │  │    │                       │  │    $XXX.XX       │ │
│  │  └────┘  $XX.XX    [ - 1 + ]   │  │                   │ │
│  │           × 数量      [删除]    │  │  运费 Shipping:   │ │
│  │                                │  │    $XX.XX        │ │
│  │  ┌────┐  产品名称              │  │                   │ │
│  │  │    │  ...                   │  │  ───────────────  │ │
│  │  └────┘  ...                   │  │  总计 Total:      │ │
│  │                                │  │    $XXX.XX       │ │
│  │  ─────────────────────────────  │  │                   │ │
│  │                                │  │  [确认订单        │ │
│  │  [继续购物 Continue Shopping]  │  │    Confirm]      │ │
│  │  [下载订单 PDF Download]       │  │                   │ │
│  │                                │  │  [使用优惠券      │ │
│  └────────────────────────────────┘  │    Apply Coupon] │ │
│                                       └───────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

#### 订单摘要卡片
| 属性 | 值 |
|-----|---|
| **背景** | `#F8F9FA` |
| **圆角** | 12px |
| **内边距** | 24px |
| **宽度** | 380px |
| **阴影** | `0 2px 8px rgba(0,0,0,0.08)` |

---

## 5. 中英文对照表

### 5.1 导航与通用
| 英文 | 中文 |
|-----|------|
| Home | 首页 |
| Products | 产品 |
| All Products | 全部产品 |
| New Arrivals | 新品上市 |
| Best Sellers | 热销产品 |
| About Us | 关于我们 |
| Contact Us | 联系我们 |
| Contact | 联系 |
| Search | 搜索 |
| Search Products... | 搜索产品... |
| Cart | 购物车 |
| Your Cart | 您的购物车 |
| Language | 语言 |
| English | English |
| 中文 | 中文 (简体) |

### 5.2 按钮与操作
| 英文 | 中文 |
|-----|------|
| Buy Now | 立即购买 |
| Add to Cart | 加入购物车 |
| View Details | 查看详情 |
| View Products | 查看产品 |
| Quick View | 快速查看 |
| Continue Shopping | 继续购物 |
| Checkout | 去结算 |
| Confirm | 确认 |
| Confirm Order | 确认订单 |
| Download | 下载 |
| Download Order | 下载订单 |
| Apply | 应用 |
| Apply Coupon | 使用优惠券 |
| Reset | 重置 |
| Clear | 清空 |
| Clear Cart | 清空购物车 |
| Remove | 删除 |
| Close | 关闭 |
| Save | 保存 |
| Cancel | 取消 |

### 5.3 产品相关
| 英文 | 中文 |
|-----|------|
| Product | 产品 |
| Products | 产品 |
| Category | 分类 |
| Categories | 分类 |
| Brand | 品牌 |
| Brands | 品牌 |
| Price | 价格 |
| Color | 颜色 |
| Colors | 颜色 |
| Size | 尺寸 |
| Sizes | 尺寸 |
| Specification | 规格 |
| Specifications | 规格 |
| Material | 材质 |
| Materials | 材质 |
| Description | 描述 |
| Details | 详情 |
| Specifications | 规格参数 |
| Reviews | 评价 |
| Ratings | 评分 |
| Related Products | 相关产品 |
| Similar Products | 相似产品 |
| Featured Products | 精选产品 |
| Out of Stock | 缺货 |
| In Stock | 有货 |
| Wishlist | 收藏 |
| Favorites | 收藏夹 |
| Compare | 对比 |
| Share | 分享 |
| Filter | 筛选 |
| Sort | 排序 |
| Sort By | 排序方式 |

### 5.4 购物车与结算
| 英文 | 中文 |
|-----|------|
| Shopping Cart | 购物车 |
| Cart Items | 购物车商品 |
| Subtotal | 小计 |
| Shipping | 运费 |
| Shipping Cost | 运费 |
| Tax | 税费 |
| Tax | 税费 |
| Total | 总计 |
| Grand Total | 总计 |
| Order Summary | 订单摘要 |
| Order Details | 订单详情 |
| Quantity | 数量 |
| Amount | 金额 |
| Discount | 折扣 |
| Coupon Code | 优惠码 |
| Enter Coupon | 输入优惠码 |

### 5.5 表单字段
| 英文 | 中文 |
|-----|------|
| Name | 姓名 |
| Full Name | 姓名 |
| First Name | 名 |
| Last Name | 姓 |
| Email | 邮箱 |
| Email Address | 邮箱地址 |
| Phone | 电话 |
| Phone Number | 电话号码 |
| Address | 地址 |
| Shipping Address | 收货地址 |
| Billing Address | 账单地址 |
| Country | 国家 |
| City | 城市 |
| State/Province | 州/省 |
| Postal Code | 邮编 |
| ZIP Code | 邮编 |
| Notes | 备注 |
| Message | 留言 |

### 5.6 烟具专业词汇
| 英文 | 中文 |
|-----|------|
| Smoke Pipe | 烟斗 |
| Glass Pipe | 玻璃烟斗 |
| Water Pipe | 水烟 |
| Bong | 水烟壶/ Bong |
| Bubbler | 小水烟 |
| Vaporizer | 电子烟/雾化器 |
| Dry Herb Vaporizer | 干草雾化器 |
| Wax Vaporizer | 蜡状物雾化器 |
| Grinder | 研磨器 |
| 4-Piece Grinder | 四件套研磨器 |
| Rolling Paper | 卷烟纸 |
| Rolling Tray | 卷烟托盘 |
| Filter Tip | 过滤嘴 |
| Lighter | 打火机 |
| Torch Lighter | 喷火打火机 |
| Ashtray | 烟灰缸 |
| Storage Container | 储存盒 |
| Smell Proof Bag | 密封袋 |
| Dabber | Dab工具 |
| Nail | 烟钉 |
| Bowl | 烟锅 |
| Downstem | 下水管 |
| Percolator | 扩散器/过滤器 |
| Ice Pinch | 冰夹 |
| Ash Catcher | 烟灰挡 |

#### 材质词汇
| 英文 | 中文 |
|-----|------|
| Glass | 玻璃 |
| Borosilicate Glass | 硼硅酸盐玻璃 |
| Silicone | 硅胶 |
| Metal | 金属 |
| Aluminum | 铝合金 |
| Stainless Steel | 不锈钢 |
| Brass | 黄铜 |
| Wood | 木质 |
| Acacia Wood |相思木 |
| Bamboo | 竹子 |
| Ceramic | 陶瓷 |
| Acrylic | 亚克力 |
| Titanium | 钛合金 |
| Quartz | 石英 |
| Crystal | 水晶 |

### 5.7 用户与账户
| 英文 | 中文 |
|-----|------|
| Login | 登录 |
| Log In | 登录 |
| Register | 注册 |
| Sign Up | 注册 |
| Account | 账户 |
| My Account | 我的账户 |
| My Orders | 我的订单 |
| Order History | 订单历史 |
| Profile | 个人资料 |
| Settings | 设置 |
| Logout | 退出 |
| Log Out | 退出 |
| Welcome | 欢迎 |
| Guest | 访客 |

### 5.8 其他通用
| 英文 | 中文 |
|-----|------|
| FAQ | 常见问题 |
| Help | 帮助 |
| Help Center | 帮助中心 |
| Terms of Service | 服务条款 |
| Privacy Policy | 隐私政策 |
| Shipping Policy | 配送政策 |
| Return Policy | 退换政策 |
| Refund Policy | 退款政策 |
| Wholesale | 批发 |
| Wholesale Price | 批发价 |
| Bulk Order | 批量订购 |
| Minimum Order | 最低订购量 |
| MOQ | 最低起订量 |
| Free Shipping | 免运费 |
| Contact for Price | 询价 |
| Inquiry | 询价 |
| Send Inquiry | 发送询价 |
| Catalog | 产品目录 |
| View Catalog | 查看目录 |
| Subscribe | 订阅 |
| Newsletter | 简报 |
| Follow Us | 关注我们 |
| Connect With Us | 联系我们 |
| Social Media | 社交媒体 |

---

## 6. 响应式设计规范

### 6.1 断点定义
| 名称 | 断点 | 目标设备 |
|-----|------|---------|
| xs | < 480px | 小手机 |
| sm | 480px - 639px | 大手机 |
| md | 640px - 767px | 平板竖屏 |
| lg | 768px - 1023px | 平板横屏 |
| xl | 1024px - 1279px | 小桌面 |
| 2xl | 1280px - 1535px | 桌面 |
| 3xl | ≥ 1536px | 大桌面 |

### 6.2 响应式调整策略

#### 导航栏
| 设备 | 导航栏表现 |
|-----|----------|
| 桌面 (≥1024px) | 完整水平导航，搜索框显示 |
| 平板 (768-1023px) | 简化菜单，部分隐藏 |
| 手机 (<768px) | 汉堡菜单，搜索图标 |

#### 产品网格
| 设备 | 列数 | 间距 |
|-----|------|------|
| 桌面 (≥1280px) | 4列 | 24px |
| 小桌面 (1024-1279px) | 3列 | 20px |
| 平板 (768-1023px) | 2列 | 20px |
| 手机 (<768px) | 1列 | 16px |

#### 侧边购物车
| 设备 | 表现 |
|-----|------|
| 桌面 (≥640px) | 右侧滑出，宽度 420px |
| 手机 (<640px) | 底部弹出，100% 宽度 |

#### 字体缩放
| 设备 | H1 | H2 | Body |
|-----|-----|-----|------|
| 桌面 | 36px | 28px | 16px |
| 平板 | 32px | 24px | 15px |
| 手机 | 28px | 22px | 14px |

### 6.3 移动端优化

#### 点击目标
- 最小点击区域: 44px × 44px
- 按钮最小宽度: 48px
- 链接间距: 至少 8px

#### 手势支持
- 支持滑动手势关闭侧边购物车
- 支持捏合缩放产品图片
- 长按显示快捷菜单

---

## 7. 交互与动效

### 7.1 过渡动画规范
| 元素 | 属性 | 时长 | 缓动函数 |
|-----|------|------|---------|
| 按钮悬停 | background, transform, box-shadow | 200ms | ease |
| 卡片悬停 | transform, box-shadow | 300ms | ease-out |
| 侧边栏滑入 | transform: translateX | 300ms | ease-out |
| 模态框 | opacity, transform | 250ms | ease |
| 下拉菜单 | opacity, transform | 200ms | ease |
| 图片加载 | opacity | 400ms | ease |
| 页面切换 | opacity | 300ms | ease |

### 7.2 微交互设计

#### 按钮点击反馈
```css
button:active {
  transform: scale(0.98);
  transition: transform 100ms;
}
```

#### 卡片悬停效果
```css
.product-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-card .product-image img {
  transition: transform 0.3s ease-out;
}
```

#### 链接悬停
```css
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #D4A574;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

#### 购物车徽章更新
```css
.cart-badge {
  animation: badge-bounce 0.3s ease;
}

@keyframes badge-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
```

### 7.3 加载状态

#### 骨架屏 (Skeleton Screen)
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### 按钮加载状态
```css
.btn-loading {
  position: relative;
  color: transparent !important;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spinner 0.8s linear infinite;
}
```

---

## 8. 图标规范

### 8.1 图标库
- **主要**: Lucide Icons (https://lucide.dev)
- **备选**: Heroicons
- **图标风格**: 线条图标，2px 描边，圆角端点

### 8.2 常用图标映射
| 功能 | Lucide图标名 | 用途 |
|-----|-------------|------|
| 购物车 | ShoppingCart | 购物车入口 |
| 购物袋 | ShoppingBag | 购物袋 |
| 搜索 | Search | 搜索框 |
| 用户 | User | 用户/账户 |
| 菜单 | Menu | 移动端菜单 |
| 关闭 | X | 关闭按钮 |
| 收藏/心形 | Heart | 收藏功能 |
| 空心心形 | Heart | 未收藏 |
| 分享 | Share2 / Share | 分享功能 |
| 筛选 | Filter | 筛选按钮 |
| 排序 | ArrowUpDown | 排序按钮 |
| 加 | Plus | 增加数量 |
| 减 | Minus | 减少数量 |
| 删除/垃圾桶 | Trash2 | 删除商品 |
| 编辑 | Edit | 编辑 |
| 箭头下 | ChevronDown | 下拉展开 |
| 箭头上 | ChevronUp | 上折叠 |
| 箭头左 | ArrowLeft | 返回/上一页 |
| 箭头右 | ArrowRight | 下一页/前进 |
| 勾选 | Check | 选中状态 |
| 星形 | Star | 评分/收藏 |
| 电话 | Phone | 联系电话 |
| 邮箱 | Mail | 电子邮箱 |
| 位置 | MapPin | 地址 |
| 地球 | Globe | 语言切换 |
| 下载 | Download | 下载 |
| 链接 | Link | 分享链接 |
| 更多 | MoreHorizontal | 更多选项 |
| 返回顶部 | ArrowUp | 返回顶部 |
| 图片 | Image | 图片占位 |
| 加载 | Loader2 | 加载中 |

### 8.3 图标尺寸规范
| 用途 | 尺寸 |
|-----|------|
| 导航图标 | 24px |
| 按钮图标 | 20px |
| 内联图标 | 16px |
| 小图标 | 14px |
| 大图标 | 32px |
| 特色图标 | 48px |

### 8.4 图标颜色
| 场景 | 颜色 |
|-----|------|
| 导航栏图标 | `#FFFFFF` |
| 深色背景图标 | `#FFFFFF` |
| 浅色背景图标 | `#495057` |
| 强调图标 | `#D4A574` |
| 禁用图标 | `#ADB5BD` |

---

## 9. 图片规范

### 9.1 产品图片
| 属性 | 主图 | 缩略图 |
|-----|------|--------|
| **尺寸** | 800×1000px (4:5) | 150×200px |
| **比例** | 4:5 (垂直) | 3:4 |
| **格式** | WebP (优先), JPG | WebP, JPG |
| **背景** | 纯白 `#FFFFFF` | 纯白 |
| **质量** | 85% | 80% |
| **最大文件大小** | 500KB | 100KB |

### 9.2 Banner图片
| 类型 | 尺寸 | 格式 |
|-----|------|------|
| Hero Banner | 1920×500px (桌面), 768×400px (平板), 640×300px (手机) | WebP, JPG |
| 分类Banner | 600×400px | WebP, JPG |
| 促销Banner | 800×400px | WebP, JPG |

### 9.3 LOGO图片
| 类型 | 尺寸 | 格式 |
|-----|------|------|
| 导航栏LOGO | 高度 44px, 宽度自适应 | SVG, PNG |
| 页脚LOGO | 高度 60px | SVG, PNG |
| Favicon | 32×32px, 16×16px | ICO, PNG |

### 9.4 图片加载策略
- 使用懒加载 (Lazy Loading)
- 使用 WebP 格式并提供 JPG 回退
- 实现渐进式加载 (Blur-up 效果)
- 图片错误时显示占位符

---

## 10. 无障碍设计 (Accessibility)

### 10.1 色彩对比度
- 文字与背景对比度 ≥ 4.5:1 (WCAG AA)
- 大文字对比度 ≥ 3:1
- 确保金色强调色 `#D4A574` 在白色背景上有足够对比度

### 10.2 键盘导航
- 所有交互元素可通过 Tab 键访问
- 使用明确的焦点样式 (金色边框 `#D4A574`)
- 支持 Enter 和 Space 键激活按钮
- 模态框支持 Esc 键关闭

### 10.3 ARIA 标签
```html
<button aria-label="加入购物车" aria-pressed="false">
<nav aria-label="主导航">
<img alt="产品名称 - 品牌" />
<input aria-invalid="false" aria-describedby="error-message" />
```

---

## 11. 设计原则总结

### 11.1 核心原则
1. **简洁专业**: 避免过度装饰，突出产品本身
2. **一致性**: 严格遵循设计系统，确保视觉统一
3. **可读性**: 清晰的层级和对比度
4. **响应式**: 全设备适配，优先移动端
5. **无障碍**: 支持键盘导航和屏幕阅读器

### 11.2 外贸B2B特点
- 突出批发和批量订购信息
- 清晰的联系方式和询盘入口
- 多语言切换便捷
- 专业可信的视觉呈现
- 金色强调体现高端定位

### 11.3 烟具行业特点
- 产品图片质量优先
- 展示材质细节（玻璃透明度等）
- 清晰的尺寸/规格选项
- 专业的变体选择体验

---

## 12. 参考资源

### 设计参考网站
- Headshop.com - 深绿色主题，产品卡片布局
- Grasscity.com - 高端烟具电商
- 阿里巴巴国际站 - B2B外贸风格
- Shopify 官方主题 - 专业电商布局

### 技术栈
- React + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Lucide Icons
- jsPDF (PDF生成)

### 字体资源
- Google Fonts: Poppins, Inter, Roboto Mono
- 中文字体: Noto Sans SC

---

*文档版本: 2.0*
*创建日期: 2026-04-11*
*最后更新: 2026-04-11*
*设计师: UI Designer*
