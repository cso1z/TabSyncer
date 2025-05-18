import { Request, Response } from "express";
import { saveSnapshot, getSnapshotsByUser, renameSnapshot, deleteSnapshots, groupSnapshot } from "../models/snapshot";

export function save(req: Request, res: Response): void {
  // @ts-ignore
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "未登录" });
    return;
  }
  const { createdAt, windowId, tabs } = req.body;
  if (!tabs || !Array.isArray(tabs)) {
    res.status(400).json({ message: "参数错误" });
    return;
  }
  const snapshot = saveSnapshot({ userId, createdAt, windowId, tabs });
  res.json({ snapshot });
}

export function list(req: Request, res: Response): void {
  // @ts-ignore
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "未登录" });
    return;
  }
  const list = getSnapshotsByUser(userId);
  res.json({ list });
}

export function rename(req: Request, res: Response): void {
  // @ts-ignore
  const userId = req.user?.id;
  const { id, name } = req.body;
  if (!userId || !id || !name) {
    res.status(400).json({ message: "参数错误" });
    return;
  }
  if (renameSnapshot(userId, id, name)) res.json({ success: true });
  else res.status(404).json({ message: "快照不存在" });
}

export function del(req: Request, res: Response): void {
  // @ts-ignore
  const userId = req.user?.id;
  const { ids } = req.body;
  if (!userId || !Array.isArray(ids)) {
    res.status(400).json({ message: "参数错误" });
    return;
  }
  const count = deleteSnapshots(userId, ids);
  res.json({ success: true, count });
}

export function group(req: Request, res: Response): void {
  // @ts-ignore
  const userId = req.user?.id;
  const { id, group } = req.body;
  if (!userId || !id || !group) {
    res.status(400).json({ message: "参数错误" });
    return;
  }
  if (groupSnapshot(userId, id, group)) res.json({ success: true });
  else res.status(404).json({ message: "快照不存在" });
} 