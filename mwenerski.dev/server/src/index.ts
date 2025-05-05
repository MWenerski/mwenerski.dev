import express from "express";
import path from "path";
import projectRoutes from "./routes/projectRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

// Parse incoming JSON
app.use(express.json());

// API routes
app.use("/api/projects", projectRoutes);

// (Optional) Log all registered routes
if (app._router && Array.isArray(app._router.stack)) {
  console.log("Registered routes:");
  app._router.stack
    .filter((layer: any) => layer.route)
    .forEach((layer: any) => {
      const methods = Object.keys(layer.route.methods)
        .map(m => m.toUpperCase())
        .join("|");
      console.log(`  ${methods} ${layer.route.path}`);
    });
}

// Serve static frontend assets
// __dirname === .../server/src, so we need to go up two levels to reach the client folder
const frontendPath = path.join(__dirname, "..", "..", "client", "dist");
app.use(express.static(frontendPath));

// Serve index.html for all non-/api GET requests using a RegExp
app.get(/^\/(?!api).*/, (_req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
