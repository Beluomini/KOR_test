import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { ClienteDTO } from "../dto/Cliente.dto";

export class ClienteController {

    static async getAllClientes(req: Request, res: Response) {
        const clientes = await AppDataSource.getRepository("Cliente").find();
        res.send(clientes);
    }

    static async createCliente(req: Request, res: Response) {
        const newCliente:ClienteDTO = {
            nome: req.body.nome,
            cnpj: req.body.cnpj
        }

        const database = await AppDataSource.getRepository("Cliente").save(newCliente);

        res.send(newCliente);
    }

}