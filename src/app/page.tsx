"use client";

import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "./components/SearchResults";

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

type Results = {
  totalPrice: number;
  data: Product[];
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const products = data.map((product: Product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((total: number, product: Product) => {
      return total + product.price;
    }, 0);
    setResults({ totalPrice, data: products });
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">buscar</button>
      </form>

      <SearchResults
        results={results.data}
        onAddToWishList={addToWishList}
        totalPrice={results.totalPrice}
      />
    </div>
  );
}
