import { Request, Response } from "express";
import { ProcessoDTO } from "../dto/Processo.dto";
import { AppDataSource } from "../database/data-source";
import { ParticipanteDTO } from "../dto/Participante.dto";

export class ProcessoController {

    static async getAllProcessos(req: Request, res: Response) {
        try{
            const processos = await AppDataSource.getRepository("Processo").find({
                relations: ["cliente_id", "participantes"]
            });
            res.send(processos);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar processos!"});
        }
    }

    static async getProcessoById(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }
        try{
            const processo = await AppDataSource.getRepository("Processo").findOneBy({"id": id});
            res.send(processo);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar processo!"});
        }
    }

    static async getProcessoByClienteAndParticipante(req: Request, res: Response) {
        try{
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
        
        }catch(err){
            res.status(500).send({message: "Erro ao buscar e/ou filtrar processos!"});
        }
    }

    static async getProcessoParticipantes(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }
        try{
            const processo = await AppDataSource.getRepository("Processo").findOne({where: {id: id}, relations: ["participantes"]});
            if(!processo) {
                res.status(404).send({message: "Processo não encontrado!"});
            }
            res.send(processo.participantes);
        }catch(err){
            res.status(500).send({message: "Erro ao buscar participantes do processo!"});
        }
    }

    static async createProcesso(req: Request, res: Response) {
        try{
            const newProcesso:ProcessoDTO = req.body;

            Object.assign(newProcesso, req.body);
            
            const database = await AppDataSource.getRepository("Processo").save(newProcesso);
    
            res.send(newProcesso);

        }catch(err){
            res.status(500).send({message: "Erro na criação de um novo processo"});
        }
    }

    static async updateProcesso(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const processo = await AppDataSource.getRepository("Processo").findOneBy({"id": id});
            
            Object.assign(processo, req.body);
            
            const database = await AppDataSource.getRepository("Processo").save(processo);
    
            res.send(processo);
        }catch(err){
            res.status(500).send({message: "Erro ao atualizar processo!"});
        }
    }

    static async deleteProcesso(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(422).send({message: "Id não informado!"});
        }

        try{
            const database = await AppDataSource.getRepository("Processo").delete(id);
            res.send("Processo deletado com sucesso!");
        }catch(err){
            res.status(500).send({message: "Erro ao deletar processo!"});
        }
    }
    
}