import { buttonVariants } from "@/components/ui/button";
import { Package } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  productName: string;
  productVariant: string;
  productPrice: number;
}

export default function ProductCard({
  id,
  productName,
  productVariant,
  productPrice,
}: Product) {
  return (
    <div className="group relative bg-card text-card-foreground  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
     <div className="relative  bg-muted/30 border-b md:border-b-0 md:border-r border-border/50 flex flex-col items-center justify-center p-8 text-muted-foreground">
          <Package className="w-16 h-16 stroke-[1.25] text-muted-foreground/50 mb-3" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground/70">
            {productName}
          </span>

          <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-border text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-2xs">
            {productVariant}
          </span>
        </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
            {productName}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Variant:{" "}
            <span className="font-medium text-foreground/80">
              {productVariant}
            </span>
          </p>
        </div>

        <div className="flex items-end justify-between pt-2 border-t border-border/40 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Price
            </span>
            <span className="text-lg font-bold text-foreground">
              ${productPrice.toFixed(2)}
            </span>
          </div>

          <Link
            href={`/products/${id}`}
            className={
              buttonVariants({ variant: "default", size: "sm" }) +
              " rounded-lg px-4 font-medium cursor-pointer"
            }
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
