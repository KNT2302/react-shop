import React from "react";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import { useBtnsContext } from "../../context";

export const ButtonAction = ({
  idProd,
  isCarted,
  quantityChoose,
  getProductUpdate,
  cartHandler,
}) => {
  const { dispatch } = useShopContext();
  const { setState } = useBtnsContext();
  const { added, pending, resetQuantity } = cartHandler;

  const addProductToCart = () => {
    pending();
    setTimeout(() => {
      dispatch(actions.addToCart({ id: idProd, quantity: quantityChoose }));
      added();
      resetQuantity();
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
          setState.handleClickUpdate();
        }}
      >
        Update
      </button>
    </>
  );
};
