import { PageHeader } from "@/app/admin/_components/pageHeader";
import prisma from "@/db/db";
import ProductForm from "../../_componenets/PorductForm";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({ where: { id } });
  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product} />
    </>
  );
}
