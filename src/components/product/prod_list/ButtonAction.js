import { useCallback } from "react";
import { actions } from "../../../store";
import { useBtnsContext } from "../../context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";

export const ButtonAction = ({
  idProd,
  quantityChoose,
  getProductUpdate,
  cartHandler,
  isEnableAddToCart,
}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { product } = useSelector((state) => state.product);

  const { setState } = useBtnsContext();
  const { added, pending } = cartHandler;

  const addProductToCart = () => {
    pending();
    setTimeout(() => {
      dispatch(actions.cartActions.addToCart(idProd, quantityChoose));
      added();
    }, 1000);
  };

  const removeProduct = (id) => {
    dispatch(actions.productActions.removeProduct(id));
  };

  const isCarted = useCallback(() => {
    return cart.find((v) => {
      return v.id === idProd;
    });
  }, [cart]);
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
      <button
        disabled={isCarted()}
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
