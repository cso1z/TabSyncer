import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = "your_jwt_secret";

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "未登录" });
    return;
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // @ts-ignore
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ message: "无效token" });
  }
} 