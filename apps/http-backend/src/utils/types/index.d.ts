import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user?: User | null;
    }
  }
}

export type User = {
  userId?: string;
};
