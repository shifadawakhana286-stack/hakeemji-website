import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetails from "@/app/product/ProductDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}