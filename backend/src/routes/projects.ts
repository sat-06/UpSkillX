import { Router } from "express";
import { getProjects } from "../services/project.service";

const router = Router();

router.post("/", (req, res) => {
  const { role } = req.body;

  res.json(getProjects(role));
});

export default router;