import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function PaginationComponent({
  currentPage,
  totalPages,
}: PaginationProps) {
  // Hide controls if there's only one page or no data
  if (totalPages <= 1) return null;

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <Pagination className="mt-5">
      <PaginationContent>
        {/* Previous page link */}
        <PaginationItem>
          {hasPrevious ? (
            <Link
              href={`/products?page=${currentPage - 1}`}
              className="flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Link>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-1 rounded-md border border-border px-3 py-2 text-sm opacity-50">
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </span>
          )}
        </PaginationItem>

        {/* Current page indicator */}
        <PaginationItem>
          <span className="px-4 text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
        </PaginationItem>

        {/* Next page link */}
        <PaginationItem>
          {hasNext ? (
            <Link
              href={`/products?page=${currentPage + 1}`}
              className="flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-1 rounded-md border border-border px-3 py-2 text-sm opacity-50">
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}