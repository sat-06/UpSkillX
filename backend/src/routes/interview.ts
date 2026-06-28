import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json([
    "Tell me about yourself.",
    "Explain your favorite project.",
    "What are your strengths?",
    "Difference between SQL and NoSQL.",
    "Explain OOP."
  ]);
});

export default router;