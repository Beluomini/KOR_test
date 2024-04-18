import { Request, Response } from "express";
import { ProcessoDTO } from "../dto/Processo.dto";
import { AppDataSource } from "../database/data-source";

export class ProcessoController {

    static async getAllProcessos(req: Request, res: Response) {
        const processos = await AppDataSource.getRepository("Processo").find();
        res.send(processos);
    }

    static async getProcessoById(req: Request, res: Response) {
        const { id } = req.params;
        const processo = await AppDataSource.getRepository("Processo").findOneBy({"id": id});
        res.send(processo);
    }

    static async createProcesso(req: Request, res: Response) {
        const newProcesso:ProcessoDTO = {
            numero: req.body.numero,
            valor_causa: req.body.valor_causa,
            tipo: req.body.tipo,
            data_citacao: req.body.data_citacao,
            data_audiencia: req.body.data_audiencia,
            forum: req.body.forum,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cliente_id: req.body.cliente_id,
            participantes: req.body.participantes
        }

        const database = await AppDataSource.getRepository("Processo").save(newProcesso);

        res.send(newProcesso);
    }

    static async updateProcesso(req: Request, res: Response) {
        const { id } = req.params;
        const newProcesso:ProcessoDTO = {
            numero: req.body.numero,
            valor_causa: req.body.valor_causa,
            tipo: req.body.tipo,
            data_citacao: req.body.data_citacao,
            data_audiencia: req.body.data_audiencia,
            forum: req.body.forum,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cliente_id: req.body.cliente_id,
            participantes: req.body.participantes
        }

        const database = await AppDataSource.getRepository("Processo").update(id, newProcesso);

        res.send(newProcesso);
    }

    static async deleteProcesso(req: Request, res: Response) {
        const { id } = req.params;
        const database = await AppDataSource.getRepository("Processo").delete(id);
        res.send("Processo deletado com sucesso!");
    }
    
}