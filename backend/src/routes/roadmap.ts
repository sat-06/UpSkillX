import { Router } from "express";

import { generateAIRoadmap } from "../services/gemini.service";

const router = Router();

router.post("/", async (req, res) => {

    const { role, skills } = req.body;

    const roadmap = await generateAIRoadmap(role, skills);

    res.json({

        roadmap

    });

});

export default router;