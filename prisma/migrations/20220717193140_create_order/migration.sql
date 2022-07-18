-- AlterTable
ALTER TABLE "rents" ADD COLUMN     "orderId" TEXT;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "orderId" TEXT;

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
