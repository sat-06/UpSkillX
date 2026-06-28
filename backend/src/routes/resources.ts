import { Router } from "express";
import { getResources } from "../services/resource.service";

const router = Router();

router.post("/", (req, res) => {
  const { role } = req.body;

  res.json(getResources(role));
});

export default router;