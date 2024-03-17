import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
  console.log("Connected to databased!");
});

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/test", (req: Request, res: Response) => {
//   res.json({ message: "Test Succeffuly" });
// });

app.use("/api/my/user", userRoutes);

app.listen(7001, () => {
  console.log("Server started on localhost:7001");
});
