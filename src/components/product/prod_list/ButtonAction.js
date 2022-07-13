import React from "react";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";

export const ButtonAction = ({
  idProd,
  isCarted,
  quantityChoose,
  handleClickUpdate,
  getProductUpdate,
  changeAddingToCart,
}) => {
  const { dispatch } = useShopContext();

  return (
    <>
      <button
        onClick={() => {
          changeAddingToCart(idProd);
          setTimeout(() => {
            dispatch(
              actions.addToCart({ id: idProd, quantity: quantityChoose })
            );
            changeAddingToCart(null);
          }, 1000);
        }}
      >
        Add to Cart
      </button>
      <button disabled={isCarted}>Delete</button>
      <button
        disabled={isCarted}
        onClick={() => {
          getProductUpdate(idProd);
          handleClickUpdate();
        }}
      >
        Update
      </button>
    </>
  );
};
