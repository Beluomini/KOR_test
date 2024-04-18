import { Request, Response } from "express";
import { ProcessoDTO } from "../dto/Processo.dto";
import { AppDataSource } from "../database/data-source";

export class ProcessoController {

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
            cliente_id: req.body.cliente_id
        }

        const database = await AppDataSource.getRepository("Processo").save(newProcesso);

        res.send(newProcesso);
    }

    static async getProcessos(req: Request, res: Response) {
        res.send("Hello World");
    }
}