import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { ParticipanteDTO } from "../dto/Participante.dto";

export class ParticipanteController {

    static async getAllParticipantes(req: Request, res: Response) {
        const participantes = await AppDataSource.getRepository("Participante").find();
        res.send(participantes);
    }

    static async getParticipanteById(req: Request, res: Response) {
        const { id } = req.params;
        const participante = await AppDataSource.getRepository("Participante").findOneBy({"id": id});
        res.send(participante);
    }

    static async createParticipante(req: Request, res: Response) {
        const newParticipante:ParticipanteDTO = {
            nome: req.body.nome,
            email: req.body.email,
            documento: req.body.documento,
            tipo: req.body.tipo,
            processos: req.body.processos
        }

        const database = await AppDataSource.getRepository("Participante").save(newParticipante);

        res.send(newParticipante);
    }

    static async updateParticipante(req: Request, res: Response) {
        const { id } = req.params;
        const newParticipante:ParticipanteDTO = {
            nome: req.body.nome,
            email: req.body.email,
            documento: req.body.documento,
            tipo: req.body.tipo,
            processos: req.body.processos
        }

        const database = await AppDataSource.getRepository("Participante").update(id, newParticipante);

        res.send(newParticipante);
    }

    static async deleteParticipante(req: Request, res: Response) {
        const { id } = req.params;
        const database = await AppDataSource.getRepository("Participante").delete(id);
        res.send("Participante deletado com sucesso!");
    }

}