const BASE_URL = "https://6776992512a55a9a7d0c4868.mockapi.io";

export async function fetchData<T>(endpoint: string): Promise<T> {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  const response = await fetch(`${BASE_URL}/${cleanEndpoint}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${cleanEndpoint}`);
  }

  return response.json();
}
interface Product {
  id: number;
  productName: string;
  productVariant: string;
  productPrice: number;
}
export const products = await fetchData<Product[]>("/products");
