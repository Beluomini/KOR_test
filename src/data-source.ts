import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente.entity"
import { Participante } from "./entity/Participante.entity"
import { Processo } from "./entity/Processo.entity"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "beluomini",
    password: "minipass",
    database: "kordb",
    synchronize: true,
    logging: false,
    entities: [Cliente, Participante, Processo],
    migrations: [__dirname + "/migrations/*{.ts}"],
    subscribers: [],
})
