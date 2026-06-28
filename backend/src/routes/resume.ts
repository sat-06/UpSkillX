import { Router } from "express";
import upload from "../config/multer";

const router = Router();

router.post("/", upload.single("resume"), async (req, res) => {

    const { targetRole } = req.body;

    res.json({

        summary:
            "Your resume demonstrates a solid programming foundation with good problem-solving ability.",

        readiness: 72,

        targetRole,

        skills: [
            "Python",
            "C++",
            "SQL",
            "Machine Learning",
            "HTML",
            "CSS"
        ],

        missingSkills: [
            "React",
            "Node.js",
            "Docker",
            "AWS",
            "System Design"
        ],

        roadmap: [

            {
                week: 1,
                topic: "React Fundamentals"
            },

            {
                week: 2,
                topic: "Node.js + Express"
            },

            {
                week: 3,
                topic: "Docker"
            },

            {
                week: 4,
                topic: "AWS Basics"
            }

        ],

        resources: [

            {
                title: "React Official Docs"
            },

            {
                title: "NodeJS Official Docs"
            },

            {
                title: "Docker Documentation"
            }

        ],

        projects: [

            {
                title: "AI Resume Analyzer",
                difficulty: "Intermediate"
            },

            {
                title: "Career Recommendation System",
                difficulty: "Advanced"
            },

            {
                title: "Job Portal using MERN",
                difficulty: "Intermediate"
            }

        ]

    });

});

export default router;