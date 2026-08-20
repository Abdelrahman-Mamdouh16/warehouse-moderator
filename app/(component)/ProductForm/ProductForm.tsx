// ProductForm.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ProductFormProps {
  initialData: {
    productName: string;
    productVariant: string;
    productPrice: number;
  };
  onUpdate: (updated: ProductFormProps["initialData"]) => void;
}

export default function ProductForm({
  initialData,
  onUpdate,
}: ProductFormProps) {
  const [values, setValues] = useState(initialData);

  // Keep the form in sync if initialData changes from outside
  // (e.g. navigating to a different product)
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(values);
  };

  return (
    <div className="bg-card border border-border/60 rounded-xl p-6 shadow-sm space-y-4 mt-6">
      <h2 className="text-lg font-semibold text-foreground border-b border-border/40 pb-3">
        Edit Product Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Product Name
            </label>
            <Input
              value={values.productName}
              onChange={(e) =>
                setValues((v) => ({ ...v, productName: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Variant
            </label>
            <Input
              value={values.productVariant}
              onChange={(e) =>
                setValues((v) => ({ ...v, productVariant: e.target.value }))
              }
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Price ($)
          </label>
          <Input
            type="number"
            step="0.01"
            value={values.productPrice}
            onChange={(e) =>
              setValues((v) => ({ ...v, productPrice: Number(e.target.value) }))
            }
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-lg font-medium cursor-pointer"
        >
          Update View
        </Button>
      </form>
    </div>
  );
}
