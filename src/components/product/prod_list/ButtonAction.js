import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import { useBtnsContext } from "../../context";

export const ButtonAction = ({
  idProd,
  quantityChoose,
  cartHandler,
  isEnableAddToCart,
}) => {
  const { state, dispatch } = useShopContext();
  const { setState } = useBtnsContext();
  const { added, pending } = cartHandler;

  const addProductToCart = () => {
    pending();
    dispatch(actions.addToCart({ id: idProd, quantity: quantityChoose }));
    setTimeout(() => added(), 1000);
  };

  const removeProduct = (id) => {
    dispatch(actions.removeProduct(id));
  };

  const isCarted = useCallback(() => {
    return state.cart.find((v) => {
      return v.id === idProd;
    });
  }, [state.cart]);
  return (
    <>
      <button onClick={addProductToCart} disabled={isEnableAddToCart}>
        Add to Cart
      </button>
      <button
        disabled={isCarted()}
        onClick={() => {
          removeProduct(idProd);
        }}
      >
        Delete
      </button>
      <Link to={`/products/${idProd}`}>
        <button
          disabled={isCarted()}
          onClick={() => {
            setState.handleClickUpdate();
          }}
        >
          Update
        </button>
      </Link>
    </>
  );
};
