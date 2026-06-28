import { Router } from "express";

import { calculateReadiness } from "../services/readiness.service";

const router = Router();

router.post("/", async (req, res) => {

    const { skills } = req.body;

    const result = calculateReadiness(skills);

    res.json(result);

});

export default router;