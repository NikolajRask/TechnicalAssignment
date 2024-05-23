/*
  Warnings:

  - The `paragrafnummer` column on the `Sag` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Sag" DROP COLUMN "paragrafnummer",
ADD COLUMN     "paragrafnummer" INTEGER;
