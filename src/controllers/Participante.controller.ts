import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { ParticipanteDTO } from "../dto/Participante.dto";

export class ParticipanteController {

    static async getAllParticipantes(req: Request, res: Response) {
        try{
            const participantes = await AppDataSource.getRepository("Participante").find();
            res.send(participantes);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar participantes!"});
        }
    }

    static async getParticipanteById(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const participante = await AppDataSource.getRepository("Participante").findOneBy({"id": id});
            res.send(participante);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar participante!"});
        }
    }

    static async createParticipante(req: Request, res: Response) {
        try{
            const newParticipante:ParticipanteDTO = {
                nome: req.body.nome,
                email: req.body.email,
                documento: req.body.documento,
                tipo: req.body.tipo,
                processos: req.body.processos
            }
    
            const database = await AppDataSource.getRepository("Participante").save(newParticipante);
    
            res.send(newParticipante);
        }catch(err){
            res.status(500).send({message: "Erro ao criar participante!"});
        }
    }

    static async updateParticipante(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const newParticipante:ParticipanteDTO = {
                nome: req.body.nome,
                email: req.body.email,
                documento: req.body.documento,
                tipo: req.body.tipo,
                processos: req.body.processos
            }
    
            const database = await AppDataSource.getRepository("Participante").update(id, newParticipante);
    
            res.send(newParticipante);
        }catch(err){
            res.status(500).send({message: "Erro ao atualizar participante!"});
        }
    }

    static async deleteParticipante(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const database = await AppDataSource.getRepository("Participante").delete(id);
            res.send("Participante deletado com sucesso!");
        }catch(err){
            res.status(500).send({message: "Erro ao deletar participante!"});
        }
    }

}