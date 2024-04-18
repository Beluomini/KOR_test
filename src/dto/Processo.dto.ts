import { ParticipanteDTO } from "./Participante.dto"

export class ProcessoDTO {
    id?: number
    numero: number
    valor_causa: number
    tipo: string
    data_citacao: Date
    data_audiencia: Date
    forum: string
    cidade: string
    estado: string
    cliente_id: string
    participantes?: ParticipanteDTO[]
    criado_em?: Date
    atualizado_em?: Date
    deletado_em?: Date
}