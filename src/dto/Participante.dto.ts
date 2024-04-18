import { ProcessoDTO } from "./Processo.dto"

export class ParticipanteDTO {
    id?: number
    nome: string
    email: string
    documento: string
    tipo: string
    processos?: ProcessoDTO[]
    criado_em?: Date
    atualizado_em?: Date
    deletado_em?: Date
}