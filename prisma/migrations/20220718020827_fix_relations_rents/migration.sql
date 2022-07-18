/*
  Warnings:

  - You are about to drop the `rents_on_products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `rents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rents_on_products" DROP CONSTRAINT "rents_on_products_productsId_fkey";

-- DropForeignKey
ALTER TABLE "rents_on_products" DROP CONSTRAINT "rents_on_products_rentsId_fkey";

-- AlterTable
ALTER TABLE "rents" ADD COLUMN     "productId" TEXT NOT NULL;

-- DropTable
DROP TABLE "rents_on_products";

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
