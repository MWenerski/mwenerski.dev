import express from "express";
import path from "path";
import projectRoutes from "./routes/projectRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

// Parse incoming JSON
app.use(express.json());

// API routes
app.use("/api/projects", projectRoutes);

// Serve static frontend
const frontendPath = path.join(__dirname, "../client/dist");
app.use(express.static(frontendPath));

// Catch‑all fallback (no anonymous “*” param)
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
