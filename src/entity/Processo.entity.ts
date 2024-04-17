import { create } from "domain"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity()
export class Processo {

    @PrimaryGeneratedColumn()
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

    @Column()
    cliente_id: number

    @CreateDateColumn()
    criado_em: Date

    @UpdateDateColumn()
    atualizado_em: Date

    @DeleteDateColumn()
    deletado_em: Date

}
