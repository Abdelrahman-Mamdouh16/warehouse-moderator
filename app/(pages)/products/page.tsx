import { LoaderCircle } from "lucide-react";
import ProductCard from "../../(component)/ProductCard/ProductCard";
import AppNavbar from "../../../components/AppNavbar/AppNavbar";
import { PaginationComponent } from "../../../components/pagination/pagination";
import { products } from "../../../lib/api";



interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Products({ searchParams }: PageProps) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const itemsPerPage = 8;



  const totalPages = Math.ceil(products.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentProducts = products.slice(start, end);

  return (
    <div className="flex flex-col gap-y-5">
      <AppNavbar content="Products" />
      {currentProducts.length === 0 ? (
        <LoaderCircle
          className="mx-auto my-10 animate-spin text-primary"
          size={40}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                productName={product.productName}
                productVariant={product.productVariant}
                productPrice={product.productPrice}
              />
            ))}
          </div>

          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}
