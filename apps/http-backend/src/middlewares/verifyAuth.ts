import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../utils/types";
import { JWT_SECRET } from "@repo/backend-common/config";

export async function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";
  if (token.length == 0) {
    res.status(401).json({ message: "Unauthorized - Missing token" });
  }
  try {
    const decoded = await jwt.verify(token, JWT_SECRET as string);
    req.user = decoded as User;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
}
