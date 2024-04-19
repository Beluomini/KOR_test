import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm"
import { Processo } from "./Processo.entity"

@Entity()
export class Participante {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    documento: string

    @Column()
    tipo: string

    @ManyToMany(() => Processo, processo => processo.participantes)
    processos: Processo[]

    @CreateDateColumn()
    criado_em: Date

    @UpdateDateColumn()
    atualizado_em: Date

    @DeleteDateColumn()
    deletado_em: Date

}
