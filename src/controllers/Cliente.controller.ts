import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { ClienteDTO } from "../dto/Cliente.dto";

export class ClienteController {

    static async getAllClientes(req: Request, res: Response) {
        try{
            const clientes = await AppDataSource.getRepository("Cliente").find();
            res.send(clientes);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar clientes!"});
        }
    }

    static async getClienteById(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const cliente = await AppDataSource.getRepository("Cliente").findOneBy({"id": id});
            res.send(cliente);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar cliente!"});
        }
    }

    static async createCliente(req: Request, res: Response) {
        try{
            const newCliente:ClienteDTO = {
                nome: req.body.nome,
                cnpj: req.body.cnpj
            }
    
            const database = await AppDataSource.getRepository("Cliente").save(newCliente);
    
            res.send(newCliente);
        }catch(err){
            res.status(500).send({message: "Erro ao criar cliente!"});
        }
    }

    static async updateCliente(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const newCliente:ClienteDTO = {
                nome: req.body.nome,
                cnpj: req.body.cnpj
            }
    
            const database = await AppDataSource.getRepository("Cliente").update(id, newCliente);
    
            res.send(newCliente);
        }catch(err){
            res.status(500).send({message: "Erro ao atualizar cliente!"});
        }
    }

    static async deleteCliente(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const database = await AppDataSource.getRepository("Cliente").delete(id);
            res.send("Cliente deletado com sucesso!");
        }catch(err){
            res.status(500).send({message: "Erro ao deletar cliente!"});
        }
    }

}