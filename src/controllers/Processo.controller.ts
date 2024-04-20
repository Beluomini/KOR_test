import { Request, Response } from "express";
import { ProcessoDTO } from "../dto/Processo.dto";
import { AppDataSource } from "../database/data-source";
import { ParticipanteDTO } from "../dto/Participante.dto";

export class ProcessoController {

    static async getAllProcessos(req: Request, res: Response) {
        const processos = await AppDataSource.getRepository("Processo").find({
            relations: ["cliente_id", "participantes"]
        });
        res.send(processos);
    }

    static async getProcessoById(req: Request, res: Response) {
        const { id } = req.params;
        const processo = await AppDataSource.getRepository("Processo").findOneBy({"id": id});
        res.send(processo);
    }

    static async getProcessoByClienteAndParticipante(req: Request, res: Response) {
        
        const processos = await AppDataSource.getRepository("Processo").find({
            relations: ["cliente_id", "participantes"]
        });


        if(!req.query.cli && !req.query.part) {

            res.send(processos);

        }else{

            const cli = req.query.cli;
            const part = req.query.part;
    
            const filteredProcessos = [];
    
            if(req.query.cli && req.query.part) {

                const processoCliente = processos.filter((processo) => {
                    return processo.cliente_id.id === cli;
                });
                const processoParticipante = processos.filter((processo) => {
                    return processo.participantes.some((participante: ParticipanteDTO) => {
                        return String(participante.id) === part;
                    });
                });
                const processosEmComum = processoCliente.filter((processo) => {
                    return processoParticipante.includes(processo);
                });
                filteredProcessos.push(processosEmComum);

            }else if(req.query.cli) {

                const processoCliente = processos.filter((processo) => {
                    return processo.cliente_id.id === cli;
                });
                filteredProcessos.push(processoCliente);

            }else if(req.query.part) {

                const processoParticipante = processos.filter((processo) => {
                    return processo.participantes.some((participante: ParticipanteDTO) => {
                        return String(participante.id) === part;
                    });
                });
                filteredProcessos.push(processoParticipante);

            }
            
            res.send(filteredProcessos);
        }

    }

    static async getProcessoParticipantes(req: Request, res: Response) {
        const { id } = req.params;
        const processo = await AppDataSource.getRepository("Processo").findOne({where: {id: id}, relations: ["participantes"]});
        res.send(processo.participantes);
    }

    static async createProcesso(req: Request, res: Response) {
        
        const newProcesso:ProcessoDTO = req.body;

        Object.assign(newProcesso, req.body);

        const database = await AppDataSource.getRepository("Processo").save(newProcesso);

        res.send(newProcesso);
    }

    static async updateProcesso(req: Request, res: Response) {

        const { id } = req.params;

        const processo = await AppDataSource.getRepository("Processo").findOneBy({"id": id});

        Object.assign(processo, req.body);

        const database = await AppDataSource.getRepository("Processo").save(processo);

        res.send(processo);

    }

    static async deleteProcesso(req: Request, res: Response) {
        const { id } = req.params;
        const database = await AppDataSource.getRepository("Processo").delete(id);
        res.send("Processo deletado com sucesso!");
    }
    
}