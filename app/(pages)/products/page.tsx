import ProductCard from "../../(component)/ProductCard/ProductCard";
import AppNavbar from "../../../components/AppNavbar/AppNavbar";
import Loading from "../../../components/Loading/Loading";
import { PaginationComponent } from "../../../components/pagination/pagination";
import { getProducts } from "../../../lib/api";

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

// Server Component: fetches warehouse catalog directly on the server
export default async function Products({ searchParams }: PageProps) {
  const params = await searchParams;
  const products = await getProducts();
  const currentPage = Number(params.page) || 1;
  const itemsPerPage = 8;

  // Server-side pagination calculation
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentProducts = products.slice(start, end);

  return (
    <div className="flex flex-col gap-y-5">
      <AppNavbar content="Products" />
      {currentProducts.length === 0 ? (
        <Loading/>
      ) : (
        <>
          {/* Responsive product catalog grid */}
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

          {/* URL-driven pagination controls */}
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}