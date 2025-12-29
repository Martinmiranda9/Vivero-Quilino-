import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePasswordResetToken1766902199492 implements MigrationInterface {
    name = 'CreatePasswordResetToken1766902199492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "password_reset_token" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "adminId" integer, CONSTRAINT "PK_838af121380dfe3a6330e04f5bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "password_reset_token" ADD CONSTRAINT "FK_96a586ec1f8732250084451fd34" FOREIGN KEY ("adminId") REFERENCES "Admins"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "password_reset_token" DROP CONSTRAINT "FK_96a586ec1f8732250084451fd34"`);
        await queryRunner.query(`DROP TABLE "password_reset_token"`);
    }

}
