// lib/api.ts
const BASE_URL = "https://6776992512a55a9a7d0c4868.mockapi.io";

export interface Product {
  id: number;
  productName: string;
  productVariant: string;
  productPrice: number;
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
