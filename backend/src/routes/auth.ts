import { Router, Request, Response, NextFunction } from "express";
import * as authController from "../controllers/authController";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

function asyncHandler(fn: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

router.post("/register", asyncHandler(authController.register));
router.post("/login", asyncHandler(authController.login));
router.get("/me", authMiddleware, asyncHandler(authController.me));

export default router; 