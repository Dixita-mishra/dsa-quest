import express from "express";
import cors from "cors";

// This file configures the Express application (middleware only).
// No routes are mounted yet - that comes in a later task.
const app = express();

app.use(cors());
app.use(express.json());

// Basic health check to confirm the server is running.
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "DSA Quest API is running." });
});

export default app;
