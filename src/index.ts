import { AppDataSource } from "./database/data-source";
import   express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { processoRouter } from "./routes/Processo.routes";
import "reflect-metadata";
import { clienteRouter } from "./routes/Cliente.routes";
import { particioanteRouter } from "./routes/Participante.routes";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/cliente", clienteRouter);
app.use("/processo", processoRouter);
app.use("/participante", particioanteRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:" + 3000);
    });
    console.log("Banco de dados conectado!");
  })
  .catch((error) => console.log(error));
