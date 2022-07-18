-- CreateTable
CREATE TABLE "rents" (
    "id" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "rents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rents_on_products" (
    "productsId" TEXT NOT NULL,
    "rentsId" TEXT NOT NULL,

    CONSTRAINT "rents_on_products_pkey" PRIMARY KEY ("productsId","rentsId")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "sale_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_on_products" (
    "productsId" TEXT NOT NULL,
    "salesId" TEXT NOT NULL,

    CONSTRAINT "sales_on_products_pkey" PRIMARY KEY ("productsId","salesId")
);

-- AddForeignKey
ALTER TABLE "rents_on_products" ADD CONSTRAINT "rents_on_products_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rents_on_products" ADD CONSTRAINT "rents_on_products_rentsId_fkey" FOREIGN KEY ("rentsId") REFERENCES "rents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_on_products" ADD CONSTRAINT "sales_on_products_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_on_products" ADD CONSTRAINT "sales_on_products_salesId_fkey" FOREIGN KEY ("salesId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
