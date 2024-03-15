import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/test", (req: Request, res: Response) => {
  res.json({ message: "Test Succeffuly" });
});

app.listen(7001, () => {
  console.log("Server started on localhost:7001");
});
