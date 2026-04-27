# 个人网站（Vercel 部署）

这是一个静态个人网站示例，包含：
- Hero 首页介绍
- 关于我 / 项目 / 联系方式模块
- 响应式样式

## 本地预览

```bash
python3 -m http.server 4173
```

然后访问：`http://localhost:4173`

## 部署到 Vercel

1. 安装并登录 Vercel CLI：
   ```bash
   npm i -g vercel
   vercel login
   ```
2. 在项目根目录执行：
   ```bash
   vercel --prod
   ```
3. CLI 会返回线上地址，例如：`https://your-site.vercel.app`
