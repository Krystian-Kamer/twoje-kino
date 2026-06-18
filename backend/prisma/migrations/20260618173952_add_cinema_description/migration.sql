/*
  Warnings:

  - Added the required column `description` to the `Cinema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cinema" ADD COLUMN     "description" TEXT NOT NULL;
