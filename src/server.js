import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./config/db.js";
import { swaggerSpec } from "./config/swagger.js";
import experienceRoutes from "./routes/experience.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Documentación Swagger / OpenAPI
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/experiences", experienceRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error"
  });
});

connectDB()
  .then(() => app.listen(PORT, () => console.log(`API running on port ${PORT}`)))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
