import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1763396547094 implements MigrationInterface {
    name = 'InitialSchema1763396547094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Categorias" ("id" SERIAL NOT NULL, "nombre" character varying(250) NOT NULL, "id_padre" integer NOT NULL DEFAULT '0', "tipo" character varying(50) NOT NULL DEFAULT 'principal', "imagen_url" character varying, "imagen2_url" character varying, CONSTRAINT "PK_474e737d774d0ee93e86dd1ae1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ImagenProducto" ("id" SERIAL NOT NULL, "url" text NOT NULL, "public_id" text, "es_principal" boolean NOT NULL DEFAULT false, "orden" integer NOT NULL, "es_ilustrativa" boolean NOT NULL DEFAULT false, "producto_id" integer, CONSTRAINT "PK_95526255d34230896f5efe03a73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Productos" ("id" SERIAL NOT NULL, "nombre" character varying(250) NOT NULL, "descripcion" text NOT NULL, "informacion_extra" text NOT NULL, "esta_activo" boolean NOT NULL DEFAULT true, "categoria_id" integer, "temporada_id" integer, CONSTRAINT "PK_4680901d0dbc98fac6a8588cda8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Temporadas" ("id" SERIAL NOT NULL, "nombre" character varying(250) NOT NULL, "fecha_desde" integer NOT NULL, "fecha_hasta" integer NOT NULL, CONSTRAINT "PK_c09856c5c9e240176d8cf6e374f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Categoria_Servicio" ("id" SERIAL NOT NULL, "nombre" character varying(250) NOT NULL, "id_padre" integer NOT NULL DEFAULT '0', "tipo" character varying(50) NOT NULL DEFAULT 'principal', "imagen_url" character varying, "imagen2_url" character varying, CONSTRAINT "PK_ea6011cd2442979d8d34b6f0bc0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ImagenesServicio" ("id" SERIAL NOT NULL, "url" text NOT NULL, "public_id" text, "es_principal" boolean NOT NULL DEFAULT false, "orden" integer NOT NULL DEFAULT '0', "es_ilustrativa" boolean NOT NULL DEFAULT false, "servicio_id" integer, CONSTRAINT "PK_1a2dfc477068a26a65506e0efa9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Servicios" ("id" SERIAL NOT NULL, "nombre" character varying(250) NOT NULL, "descripcion" text NOT NULL, "informacion_extra" text NOT NULL, "esta_activo" boolean NOT NULL DEFAULT true, "categoria_id" integer, CONSTRAINT "PK_5dc10ec4063251070db0499e74f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "SobreNosotros" ("id" SERIAL NOT NULL, "nuestro_origen" text NOT NULL, "produccion_historica" text NOT NULL, "nuevas_producciones" text NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL DEFAULT now(), "imagen_url" character varying, "imagen2_url" character varying, "imagen3_url" character varying, "imagen4_url" character varying, "imagen5_url" character varying, CONSTRAINT "PK_b83672a41f05bfda0ace42a4efe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Admins" ("id" SERIAL NOT NULL, "email" character varying(200) NOT NULL, "passwordHash" character varying NOT NULL, CONSTRAINT "UQ_5dd3e67c7838483da1149025c32" UNIQUE ("email"), CONSTRAINT "PK_519fa28e9620ff7e67759daa754" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "RefreshTokens" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "admin_id" integer, CONSTRAINT "UQ_db56120664dd9acb3c8ae67a42e" UNIQUE ("token"), CONSTRAINT "PK_07ff4bc1b9063ed3401f15aea10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Encargado" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "foto" character varying(255) NOT NULL, "descripcion" text NOT NULL, CONSTRAINT "PK_ca921e204c7aba85ef4e6ac5a35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contactos" ("id" SERIAL NOT NULL, "horario_atencion" character varying NOT NULL, "email" character varying(250) NOT NULL, "telefono" character varying(20) NOT NULL, "whatsapp" character varying(20) NOT NULL, CONSTRAINT "PK_d8a88d3690915aba8dc617a7ffd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ImagenProducto" ADD CONSTRAINT "FK_ee61c60ce8cf8e1da831cf4fc95" FOREIGN KEY ("producto_id") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Productos" ADD CONSTRAINT "FK_2c4365ce6fd4f9839b127cd94ec" FOREIGN KEY ("categoria_id") REFERENCES "Categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Productos" ADD CONSTRAINT "FK_82d551884979251b1ea0d41d9a1" FOREIGN KEY ("temporada_id") REFERENCES "Temporadas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ImagenesServicio" ADD CONSTRAINT "FK_61dfd68c7c7322c44cf8efdcebe" FOREIGN KEY ("servicio_id") REFERENCES "Servicios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Servicios" ADD CONSTRAINT "FK_97197fc995236e0a537fae43f18" FOREIGN KEY ("categoria_id") REFERENCES "Categoria_Servicio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "RefreshTokens" ADD CONSTRAINT "FK_2b0cbce27e1a52cd60db4a64a41" FOREIGN KEY ("admin_id") REFERENCES "Admins"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "RefreshTokens" DROP CONSTRAINT "FK_2b0cbce27e1a52cd60db4a64a41"`);
        await queryRunner.query(`ALTER TABLE "Servicios" DROP CONSTRAINT "FK_97197fc995236e0a537fae43f18"`);
        await queryRunner.query(`ALTER TABLE "ImagenesServicio" DROP CONSTRAINT "FK_61dfd68c7c7322c44cf8efdcebe"`);
        await queryRunner.query(`ALTER TABLE "Productos" DROP CONSTRAINT "FK_82d551884979251b1ea0d41d9a1"`);
        await queryRunner.query(`ALTER TABLE "Productos" DROP CONSTRAINT "FK_2c4365ce6fd4f9839b127cd94ec"`);
        await queryRunner.query(`ALTER TABLE "ImagenProducto" DROP CONSTRAINT "FK_ee61c60ce8cf8e1da831cf4fc95"`);
        await queryRunner.query(`DROP TABLE "contactos"`);
        await queryRunner.query(`DROP TABLE "Encargado"`);
        await queryRunner.query(`DROP TABLE "RefreshTokens"`);
        await queryRunner.query(`DROP TABLE "Admins"`);
        await queryRunner.query(`DROP TABLE "SobreNosotros"`);
        await queryRunner.query(`DROP TABLE "Servicios"`);
        await queryRunner.query(`DROP TABLE "ImagenesServicio"`);
        await queryRunner.query(`DROP TABLE "Categoria_Servicio"`);
        await queryRunner.query(`DROP TABLE "Temporadas"`);
        await queryRunner.query(`DROP TABLE "Productos"`);
        await queryRunner.query(`DROP TABLE "ImagenProducto"`);
        await queryRunner.query(`DROP TABLE "Categorias"`);
    }

}
