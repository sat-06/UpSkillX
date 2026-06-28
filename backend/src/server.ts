import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import authRoutes from "./routes/auth";
import assessmentRoutes from "./routes/assessment";
import roadmapRoutes from "./routes/roadmap";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/roadmap", roadmapRoutes);
import resumeRoutes from "./routes/resume";
app.use("/api/resume",resumeRoutes);

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