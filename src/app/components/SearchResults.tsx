import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  // *como useMemo tb tem um custo de processamento, para melhorar ainda mais esse dado do total price será calculado na home na fn handleSearch
  // const totalPrice = useMemo(
  //   () => results.reduce((total, product) => total + product.price, 0),
  //   []
  // );
  return (
    <div>
      <h1>{totalPrice}</h1>
      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
