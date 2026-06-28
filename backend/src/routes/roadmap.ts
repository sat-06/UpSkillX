import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  res.json({
    roadmap: [
      {
        week: 1,
        topic: "HTML & CSS"
      },
      {
        week: 2,
        topic: "JavaScript"
      },
      {
        week: 3,
        topic: "React"
      },
      {
        week: 4,
        topic: "Next.js"
      }
    ]
  });
});

export default router;