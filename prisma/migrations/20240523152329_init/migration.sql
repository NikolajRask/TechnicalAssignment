-- AlterTable
CREATE SEQUENCE sag_id_seq;
ALTER TABLE "Sag" ALTER COLUMN "id" SET DEFAULT nextval('sag_id_seq');
ALTER SEQUENCE sag_id_seq OWNED BY "Sag"."id";
