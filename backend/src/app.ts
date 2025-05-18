import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import snapshotRoutes from "./routes/snapshot";
import { requestLogger } from "./middlewares/requestLogger";

const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    /^chrome-extension:\/\//
  ],
  credentials: true
}));
app.use(express.json());

app.use(requestLogger);

app.use("/api/auth", authRoutes);
app.use("/api/snapshot", snapshotRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
}); 