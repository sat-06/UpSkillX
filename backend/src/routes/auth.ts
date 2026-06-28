import { Router } from "express";

const router = Router();

router.post("/signup", async (req, res) => {
  res.json({
    success: true,
    message: "Signup API",
  });
});

router.post("/login", async (req, res) => {
  res.json({
    success: true,
    token: "demo-token",
  });
});

export default router;