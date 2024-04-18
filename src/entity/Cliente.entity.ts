import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm"
import { Processo } from "./Processo.entity"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    nome: string

    @Column()
    cnpj: string

    @OneToMany(() => Processo, processo => processo.cliente_id)
    processos: Processo[]

    @CreateDateColumn()
    criado_em: Date

    @UpdateDateColumn()
    atualizado_em: Date

    @DeleteDateColumn()
    deletado_em: Date

}
