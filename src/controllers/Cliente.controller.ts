import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { ClienteDTO } from "../dto/Cliente.dto";

export class ClienteController {

    static async getAllClientes(req: Request, res: Response) {
        const clientes = await AppDataSource.getRepository("Cliente").find();
        res.send(clientes);
    }

    static async getClienteById(req: Request, res: Response) {
        const { id } = req.params;
        const cliente = await AppDataSource.getRepository("Cliente").findOneBy({"id": id});
        res.send(cliente);
    }

    static async createCliente(req: Request, res: Response) {
        const newCliente:ClienteDTO = {
            nome: req.body.nome,
            cnpj: req.body.cnpj
        }

        const database = await AppDataSource.getRepository("Cliente").save(newCliente);

        res.send(newCliente);
    }

    static async updateCliente(req: Request, res: Response) {
        const { id } = req.params;
        const newCliente:ClienteDTO = {
            nome: req.body.nome,
            cnpj: req.body.cnpj
        }

        const database = await AppDataSource.getRepository("Cliente").update(id, newCliente);

        res.send(newCliente);
    }

    static async deleteCliente(req: Request, res: Response) {
        const { id } = req.params;
        const database = await AppDataSource.getRepository("Cliente").delete(id);
        res.send("Cliente deletado com sucesso!");
    }

}