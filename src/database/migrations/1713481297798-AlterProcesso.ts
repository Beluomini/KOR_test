import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterProcesso1713481297798 implements MigrationInterface {
    name = 'AlterProcesso1713481297798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processo" DROP CONSTRAINT "FK_df4ef10c1f663c12d4fa5f5332f"`);
        await queryRunner.query(`ALTER TABLE "processo" RENAME COLUMN "clienteId" TO "clienteIdId"`);
        await queryRunner.query(`ALTER TABLE "processo" ADD CONSTRAINT "FK_e33eb0be0715d992316900c212b" FOREIGN KEY ("clienteIdId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processo" DROP CONSTRAINT "FK_e33eb0be0715d992316900c212b"`);
        await queryRunner.query(`ALTER TABLE "processo" RENAME COLUMN "clienteIdId" TO "clienteId"`);
        await queryRunner.query(`ALTER TABLE "processo" ADD CONSTRAINT "FK_df4ef10c1f663c12d4fa5f5332f" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
