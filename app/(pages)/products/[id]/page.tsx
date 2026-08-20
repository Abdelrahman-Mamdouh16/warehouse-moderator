import ProductDetailClient from "@/app/(component)/ProductDetail/ProductDetailClient";
import { getProducts } from "@/lib/api";
import Loading from "../../../../components/Loading/Loading";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: PageProps) {
  const { id } = await params;

  const product = await getProducts().then((products) =>
    products.find((p) => p.id === parseInt(id)),
  );

  return !product ? (
    <Loading />
  ) : (
    <ProductDetailClient initialProduct={product} />
  );
}
