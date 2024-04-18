import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1713400516438 implements MigrationInterface {
    name = 'CreateTables1713400516438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "participante" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "documento" character varying NOT NULL, "tipo" character varying NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), "deletado_em" TIMESTAMP, CONSTRAINT "PK_1aac3475896941c1b7e42dcfda8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "processo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "numero" integer NOT NULL, "valor_causa" integer NOT NULL, "tipo" character varying NOT NULL, "data_citacao" TIMESTAMP NOT NULL, "data_audiencia" TIMESTAMP NOT NULL, "forum" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), "deletado_em" TIMESTAMP, "clienteId" uuid, CONSTRAINT "PK_b72fde2a8acd7a422692b9ab5f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), "deletado_em" TIMESTAMP, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "participante_processos_processo" ("participanteId" uuid NOT NULL, "processoId" uuid NOT NULL, CONSTRAINT "PK_1c004da68aa959e75cd72ba17a6" PRIMARY KEY ("participanteId", "processoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_db38732dce184d6288f57849dc" ON "participante_processos_processo" ("participanteId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5a2398a07fee952a442fead50a" ON "participante_processos_processo" ("processoId") `);
        await queryRunner.query(`CREATE TABLE "processo_participantes_participante" ("processoId" uuid NOT NULL, "participanteId" uuid NOT NULL, CONSTRAINT "PK_3b1d441f69b8a4f864dddef84a2" PRIMARY KEY ("processoId", "participanteId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a7203b171f5b0b0b1f54a463c8" ON "processo_participantes_participante" ("processoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fc31476ec509932616977d7f6a" ON "processo_participantes_participante" ("participanteId") `);
        await queryRunner.query(`ALTER TABLE "processo" ADD CONSTRAINT "FK_df4ef10c1f663c12d4fa5f5332f" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "participante_processos_processo" ADD CONSTRAINT "FK_db38732dce184d6288f57849dcd" FOREIGN KEY ("participanteId") REFERENCES "participante"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "participante_processos_processo" ADD CONSTRAINT "FK_5a2398a07fee952a442fead50a5" FOREIGN KEY ("processoId") REFERENCES "processo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "processo_participantes_participante" ADD CONSTRAINT "FK_a7203b171f5b0b0b1f54a463c86" FOREIGN KEY ("processoId") REFERENCES "processo"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "processo_participantes_participante" ADD CONSTRAINT "FK_fc31476ec509932616977d7f6ad" FOREIGN KEY ("participanteId") REFERENCES "participante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processo_participantes_participante" DROP CONSTRAINT "FK_fc31476ec509932616977d7f6ad"`);
        await queryRunner.query(`ALTER TABLE "processo_participantes_participante" DROP CONSTRAINT "FK_a7203b171f5b0b0b1f54a463c86"`);
        await queryRunner.query(`ALTER TABLE "participante_processos_processo" DROP CONSTRAINT "FK_5a2398a07fee952a442fead50a5"`);
        await queryRunner.query(`ALTER TABLE "participante_processos_processo" DROP CONSTRAINT "FK_db38732dce184d6288f57849dcd"`);
        await queryRunner.query(`ALTER TABLE "processo" DROP CONSTRAINT "FK_df4ef10c1f663c12d4fa5f5332f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fc31476ec509932616977d7f6a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a7203b171f5b0b0b1f54a463c8"`);
        await queryRunner.query(`DROP TABLE "processo_participantes_participante"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5a2398a07fee952a442fead50a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_db38732dce184d6288f57849dc"`);
        await queryRunner.query(`DROP TABLE "participante_processos_processo"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "processo"`);
        await queryRunner.query(`DROP TABLE "participante"`);
    }

}
