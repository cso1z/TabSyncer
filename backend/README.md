# TabSyncer 后端

## 目录结构

```
backend/
├── src/
│   ├── app.ts                # 应用入口
│   ├── controllers/
│   │   └── authController.ts # 认证控制器
│   ├── middlewares/
│   │   └── auth.ts           # JWT 鉴权中间件
│   ├── models/
│   │   └── user.ts           # 用户模型（内存模拟）
│   └── routes/
│       └── auth.ts           # 认证相关路由
├── package.json
├── tsconfig.json
└── ...
```

## 主要功能
- 邮箱注册/登录（JWT 鉴权）
- Google 授权登录（预留接口）
- 获取当前登录用户信息

## 依赖安装
```bash
cd backend
npm install
```

## 运行开发环境
```bash
npx ts-node src/app.ts
```
或
```bash
npm run dev
```
（如已配置 scripts）

## 说明
- 当前用户数据为内存模拟，实际部署请接入数据库
- JWT 密钥请用环境变量管理
- Google OAuth 需补充 passport 集成 