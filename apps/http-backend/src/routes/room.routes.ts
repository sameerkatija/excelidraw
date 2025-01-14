import { Request, Response, Router } from "express";
import { verifyAuth } from "../middlewares/verifyAuth";

const router: Router = Router();

router.post("/", verifyAuth, async (req: Request, res: Response) => {
  try {
    // TO DO: Implement sign-up logic
    res.send("I will sign up");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
