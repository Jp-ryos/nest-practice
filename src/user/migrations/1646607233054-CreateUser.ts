import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1646607233054 implements MigrationInterface {
    name = 'CreateUser1646607233054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "t_users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_code" character varying(20) NOT NULL, "user_name" character varying(50), "password" character varying(512) NOT NULL, "email_address" character varying(100), "user_type" character varying(2) NOT NULL, "email_address_activation_flag" character(1) NOT NULL, "friend_code" character varying(20) NOT NULL, "ignore_access_flag" character(1) NOT NULL, "common_create_user_name" character varying(20) NOT NULL, "common_create_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "common_update_user_name" character varying(20) NOT NULL, "common_update_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "common_delete_flag" character(1) NOT NULL, CONSTRAINT "UQ_76e4f9cf8f8e0625ef723604b49" UNIQUE ("user_code"), CONSTRAINT "PK_e30dd62b6236bc49aec45f34316" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "t_users"`);
    }

}
