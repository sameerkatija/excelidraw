import { Router } from "express";
import { signInSchema, signUpSchema } from "@repo/common/types";
const router: Router = Router();

router.post("/signup", (req, res) => {
  const data = signUpSchema.safeParse(req.body);
  if (!data.success) {
    res.status(401).json("Incorrect Inputs");
  } else {
    res.status(200).json({ message: "I will sign you up" });
  }
});

router.post("/signin", (req, res) => {
  const data = signInSchema.safeParse(req.body);
  if (!data.success) {
    res.status(401).json("Incorrect Inputs");
  } else {
    res.status(200).json({ message: "I will sign you in" });
  }
});

export default router;
