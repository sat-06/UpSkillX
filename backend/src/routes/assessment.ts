import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { skills } = req.body;

  const readiness = Math.min((skills?.length || 0) * 10, 100);

  res.json({
    readiness,
    missingSkills: [
      "React",
      "Node.js",
      "Docker",
      "AWS"
    ]
  });
});

export default router;