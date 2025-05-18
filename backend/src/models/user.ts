import bcrypt from "bcryptjs";

export interface User {
  id: number;
  email: string;
  passwordHash?: string;
  googleId?: string;
  createdAt: Date;
  updatedAt: Date;
}

let users: User[] = [];
let idCounter = 1;

// 添加测试账号
const testPasswordHash = bcrypt.hashSync("123456", 10);
users.push({
  id: idCounter++,
  email: "111@qq.com",
  passwordHash: testPasswordHash,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export function findUserByEmail(email: string): User | undefined {
  return users.find(u => u.email === email);
}

export function findUserByGoogleId(googleId: string): User | undefined {
  return users.find(u => u.googleId === googleId);
}

export function createUser(user: Partial<User>): User {
  const newUser: User = {
    id: idCounter++,
    email: user.email!,
    passwordHash: user.passwordHash,
    googleId: user.googleId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  users.push(newUser);
  return newUser;
} 