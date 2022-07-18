/*
  Warnings:

  - You are about to drop the `sales_on_products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sales_on_products" DROP CONSTRAINT "sales_on_products_productsId_fkey";

-- DropForeignKey
ALTER TABLE "sales_on_products" DROP CONSTRAINT "sales_on_products_salesId_fkey";

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "productId" TEXT NOT NULL;

-- DropTable
DROP TABLE "sales_on_products";

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
