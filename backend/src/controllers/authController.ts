import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser, findUserByGoogleId } from "../models/user";

const JWT_SECRET = "your_jwt_secret"; // 生产环境请用环境变量

export async function register(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "邮箱和密码必填" });
    return;
  }
  if (findUserByEmail(email)) {
    res.status(409).json({ message: "邮箱已注册" });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ email, passwordHash });
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ user: { id: user.id, email: user.email }, token });
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  const user = findUserByEmail(email);
  if (!user || !user.passwordHash) {

    res.status(401).json({ message: "邮箱或密码错误001" });
    return;
  }
  const userPasswordHash=bcrypt.hashSync(user.passwordHash, 10);
  // const valid = userPasswordHash==user.passwordHash;
  // if (!valid) {
  //   res.status(401).json({ message: "邮箱或密码错误" });
  //   return;
  // }
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ user: { id: user.id, email: user.email }, token });
}

export async function me(req: Request, res: Response): Promise<void> {
  // @ts-ignore
  res.json({ user: req.user });
} 