"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProductFormProps {
  initialData: {
    productName: string;
    productVariant: string;
    productPrice: number;
  };
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("productName") as string;
    const variant = formData.get("productVariant") as string;
    const price = formData.get("productPrice") as string;

    // تحديث الـ URL محلياً بدون إعادة تحميل الصفحة بالكامل
    router.push(`?name=${encodeURIComponent(name)}&variant=${encodeURIComponent(variant)}&price=${encodeURIComponent(price)}`);
  };

  return (
    <div className="bg-card border border-border/60 rounded-xl p-6 shadow-sm space-y-4 mt-6">
      <h2 className="text-lg font-semibold text-foreground border-b border-border/40 pb-3">
        Edit Product Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Product Name</label>
            <Input name="productName" defaultValue={initialData.productName} required />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Variant</label>
            <Input name="productVariant" defaultValue={initialData.productVariant} required />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Price ($)</label>
          <Input name="productPrice" type="number" step="0.01" defaultValue={initialData.productPrice} required />
        </div>

        <Button type="submit" className="w-full rounded-lg font-medium cursor-pointer">
          Update View
        </Button>
      </form>
    </div>
  );
}