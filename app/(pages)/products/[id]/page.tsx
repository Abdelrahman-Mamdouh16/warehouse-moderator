import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";
import Link from "next/link";
import { products } from "../../../../lib/api";

import ProductForm from "../../../(component)/ProductForm/ProductForm";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string; variant?: string; price?: string }>;
}

export default async function ProductDetail({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const productId = Number(resolvedParams.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
        <p className="text-muted-foreground font-medium">Product not found.</p>

        <Link href="/products">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-2">
      {/* زر العودة للخلف */}
      <div>
        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>

      <div className="bg-card text-card-foreground border border-border/60 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[280px] bg-muted/30 border-b md:border-b-0 md:border-r border-border/50 flex flex-col items-center justify-center p-8 text-muted-foreground">
          <Package className="w-16 h-16 stroke-[1.25] text-muted-foreground/50 mb-3" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground/70">
            {resolvedSearchParams.name || product.productName}
          </span>

          <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-border text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-2xs">
            {resolvedSearchParams.variant || product.productVariant}
          </span>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                Product Details
              </span>
              <h1 className="text-2xl font-bold text-foreground tracking-tight mt-1">
                {resolvedSearchParams.name || product.productName}
              </h1>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg border border-border/40 text-xs text-muted-foreground">
              <span>Variant:</span>
              <span className="font-semibold text-foreground">
                {resolvedSearchParams.variant || product.productVariant}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              High-quality variant crafted for warehouse management and
              inventory control. Optimized for clear specification tracking.
            </p>
          </div>

          {/* قسم السعر والأزرار */}
          <div className="pt-6 border-t border-border/40 flex items-end justify-between gap-4 mt-auto">
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Total Price
              </span>
              <span className="text-2xl font-bold text-foreground break-all">
                ${resolvedSearchParams.price || product.productPrice.toFixed(2)}
              </span>
            </div>

            <Button size="lg" className="rounded-xl px-6 font-medium shadow-xs">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <ProductForm initialData={product} />
    </div>
  );
}
