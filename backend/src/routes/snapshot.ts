import { Router, Request, Response, NextFunction } from "express";
import { authMiddleware } from "../middlewares/auth";
import * as snapshotController from "../controllers/snapshotController";

const router = Router();
function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => any) {
  return (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next);
}
router.post("/save", authMiddleware, asyncHandler(snapshotController.save));
router.get("/list", authMiddleware, asyncHandler(snapshotController.list));
router.post("/rename", authMiddleware, asyncHandler(snapshotController.rename));
router.post("/delete", authMiddleware, asyncHandler(snapshotController.del));
router.post("/group", authMiddleware, asyncHandler(snapshotController.group));
export default router; 