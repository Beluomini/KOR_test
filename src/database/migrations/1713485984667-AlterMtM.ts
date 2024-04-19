import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterMtM1713485984667 implements MigrationInterface {
    name = 'AlterMtM1713485984667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participante" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "participante" ADD "tipo" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participante" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "participante" ADD "tipo" character varying NOT NULL`);
    }

}
