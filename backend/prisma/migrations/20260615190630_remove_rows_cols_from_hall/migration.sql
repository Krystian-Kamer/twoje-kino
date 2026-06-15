/*
  Warnings:

  - You are about to drop the column `cols` on the `Hall` table. All the data in the column will be lost.
  - You are about to drop the column `rows` on the `Hall` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hall" DROP COLUMN "cols",
DROP COLUMN "rows";
