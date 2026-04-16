# 工作记忆

## 项目信息
- **当前项目**: 烟具外贸购物网站 (HONG KONG COOKIES TRADING LIMITED)
- **技术栈**: React + TypeScript + Vite + Tailwind CSS v4 + React Router v7 + jsPDF + lucide-react
- **工作目录**: c:\Users\Administrator\WorkBuddy\20260411184422
- **前端端口**: 3000

## 项目结构
```
frontend/
├── src/
│   ├── components/ (Header, ProductCard, ProductGrid, ProductDetail, Cart, VariantSelector, etc.)
│   ├── context/ (LanguageContext, CartContext)
│   ├── i18n/ (en.ts, zh.ts)
│   ├── pages/ (Home, ProductPage)
│   ├── utils/ (generatePDF.ts)
│   ├── data/ (products.ts - 示例产品数据)
│   ├── types/ (index.ts)
│   └── App.tsx
```

## 已完成任务
1. ✅ 初始化 Vite + React + TypeScript 项目
2. ✅ 配置 Tailwind CSS v4
3. ✅ 实现中英文国际化 (LanguageContext)
4. ✅ 实现购物车状态管理 (CartContext)
5. ✅ 实现产品列表页 (首页)
6. ✅ 实现产品详情页 (包含变体选择器)
7. ✅ 实现侧边购物车
8. ✅ 实现客户表单
9. ✅ 实现 PDF 订单生成 (jsPDF)

## 关键文件
- SPEC.md: 项目规范文档
- frontend/src/components/Cart.tsx: 修复过 hook 调用 bug
- frontend/src/utils/generatePDF.ts: PDF 生成逻辑
- frontend/admin.html: 管理后台页面（支持本地上传图片、变体选项）
- backend/src/db/init.js: 数据库初始化（支持颜色/尺寸/规格/材质/自定义参数）
- backend/src/routes/products.js: 产品API（支持保存变体选项）

## 更新记录
- 2026-04-11: 完成UI设计规范V2更新（高端外贸风格配色、Poppins+Inter+Roboto Mono字体、公司LOGO设计、产品卡片hover效果）
- 2026-04-11: **前端完全重写** - 应用深绿色(#1B4332)主题 + 金色(#D4A574)强调色
- 2026-04-11: 完成UI设计规范V2更新（高端外贸风格配色、Poppins+Inter+Roboto Mono字体、公司LOGO设计、产品卡片hover效果）
- 2026-04-11: **前端完全重写** - 应用深绿色(#1B4332)主题 + 橙色(#FF8C00)强调色
