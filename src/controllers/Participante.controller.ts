import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { ParticipanteDTO } from "../dto/Participante.dto";

export class ParticipanteController {

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

}