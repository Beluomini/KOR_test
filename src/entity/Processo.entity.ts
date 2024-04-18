import { create } from "domain"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { Participante } from "./Participante.entity"
import { Cliente } from "./Cliente.entity"

@Entity()
export class Processo {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    numero: number

    @Column()
    valor_causa: number

    @Column()
    tipo: string

    @Column()
    data_citacao: Date

    @Column()
    data_audiencia: Date

    @Column()
    forum: string

    @Column()
    cidade: string

    @Column()
    estado: string

    @ManyToOne(() => Cliente, cliente => cliente.processos)
    cliente_id: Cliente

    @ManyToMany(() => Participante, participante => participante.processos)
    @JoinTable()
    participantes: Participante[]

    @CreateDateColumn()
    criado_em: Date

    @UpdateDateColumn()
    atualizado_em: Date

    @DeleteDateColumn()
    deletado_em: Date

}
