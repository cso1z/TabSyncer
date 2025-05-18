# TabSyncer 前端（Chrome 插件）

## 目录结构

```
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   └── Login/
│   │       ├── LoginForm.vue           # 邮箱登录/注册表单
│   │       ├── GoogleLoginButton.vue   # Google 授权登录按钮
│   │       ├── ErrorMessage.vue        # 错误提示组件
│   │       └── index.ts                # 组件导出
│   └── ...
├── public/
├── package.json
├── vite.config.ts
└── ...
```

## 主要功能
- 邮箱注册/登录
- Google 授权登录
- 登录态管理与错误提示

## 依赖安装
```bash
cd frontend
npm install
```

## 运行开发环境
```bash
npm run dev
```

## 说明
- 需将 `/api/auth` 代理到后端（见 vite.config.ts 配置）
- 登录成功后 token 存储于 localStorage
- 需配合后端服务一起使用
