import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { readiness } = req.body;

  let status = "Needs Improvement";

  if (readiness >= 80) status = "Internship Ready";
  else if (readiness >= 60) status = "Almost Ready";

  res.json({
    readiness,
    status,
  });
});

export default router;