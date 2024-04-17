import "reflect-metadata"
import { DataSource } from "typeorm"
import { Participante } from "./entity/Participante.entity"
import { Cliente } from "./entity/Cliente.entity"
import { Processo } from "./entity/Processo.entity"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Cliente , Participante, Processo],
    migrations: [__dirname + "/migrations/*{.ts}"],
    subscribers: [],
})
