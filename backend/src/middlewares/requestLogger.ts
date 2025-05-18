import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const logPath = path.resolve(__dirname, "../../request_log");

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();
  const chunks: any[] = [];
  const oldJson = res.json;
  res.json = function (body: any) {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} body: ${JSON.stringify(req.body)} status: ${res.statusCode} response: ${JSON.stringify(body)}\n`;
    fs.appendFile(logPath, log, err => {
      if (err) console.error("写入日志失败", err);
    });
    // @ts-ignore
    return oldJson.call(this, body);
  };
  next();
} 