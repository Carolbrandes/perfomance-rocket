import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, product) => total + product.price, 0),
    []
  );
  return (
    <div>
      <h1>{totalPrice}</h1>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
