import { List, ListRowRenderer } from "react-virtualized";
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

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    // * o style é que determina se o conteudo esta ou nao visivel
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
