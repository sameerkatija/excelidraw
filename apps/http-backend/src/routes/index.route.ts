import { Router } from "express";
import authRoutes from "./auth.routes";
import roomRoutes from "./room.routes";
const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/api/room", roomRoutes);

router.get("/", (req, res) => {
  res.send("working fine");
});

export default router;
