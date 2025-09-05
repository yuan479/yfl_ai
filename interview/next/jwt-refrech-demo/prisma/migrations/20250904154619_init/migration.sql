/*
  Warnings:

  - You are about to drop the column `refrechToken` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `refrechToken`,
    ADD COLUMN `refreshToken` VARCHAR(191) NULL;
