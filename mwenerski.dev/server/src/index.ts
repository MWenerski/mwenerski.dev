import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

// Adjust this path to match your project structure
const frontendPath = path.join(__dirname, "../client/dist");

// Serve static files
app.use(express.static(frontendPath));

// Serve index.html for all routes (since React handles them)
app.get("*", (_req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
