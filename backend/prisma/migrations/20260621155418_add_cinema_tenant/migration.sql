/*
  Warnings:

  - A unique constraint covering the columns `[tenant]` on the table `Cinema` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tenant` to the `Cinema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cinema" ADD COLUMN     "tenant" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cinema_tenant_key" ON "Cinema"("tenant");
