import { AppDataSource } from "./database/data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { processoRouter } from "./routes/Processo.routes";
import "reflect-metadata";
import { clienteRouter } from "./routes/Cliente.routes";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/cliente", clienteRouter);
app.use("/processo", processoRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:" + 3000);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
