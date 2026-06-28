import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import authRoutes from "./routes/auth";
import assessmentRoutes from "./routes/assessment";
import roadmapRoutes from "./routes/roadmap";
import resumeRoutes from "./routes/resume";
import resourceRoutes from "./routes/resources";
import projectRoutes from "./routes/projects";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (_, res) => {
  res.json({
    project: "UpSkillX API",
    status: "Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});