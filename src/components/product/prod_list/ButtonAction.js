import React from "react";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import { useBtnActionContext } from "./ButtonActionContext";

export const ButtonAction = ({
  idProd,
  isCarted,
  quantityChoose,
  handleClickUpdate,
  getProductUpdate,
}) => {
  const { dispatch } = useShopContext();
  const { changetoAddingToCart, changetoAddedToCart } = useBtnActionContext();

  const addProductToCart = () => {
    changetoAddingToCart();
    setTimeout(() => {
      dispatch(actions.addToCart({ id: idProd, quantity: quantityChoose }));
      changetoAddedToCart();
    }, 1000);
  };

  return (
    <>
      <button onClick={addProductToCart}>Add to Cart</button>
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
