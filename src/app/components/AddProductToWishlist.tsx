import React from "react";

export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <div>
      deseja adicionar aos favoritos?
      <button onClick={onAddToWishList}>sim</button>
      <button onClick={onRequestClose}>não</button>
    </div>
  );
}
