import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import { useBtnsContext } from "../../context";

export const ButtonAction = ({
  idProd,
  quantityChoose,
  getProductUpdate,
  cartHandler,
  isEnableAddToCart,
}) => {
  const { dispatch } = useShopContext();
  const { setState } = useBtnsContext();
  const { added, pending, isAdjust, changeIsAdjust } = cartHandler;

  const addProductToCart = () => {
    pending();
    setTimeout(() => {
      dispatch(actions.addToCart({ id: idProd, quantity: quantityChoose }));
      added();
      changeIsAdjust();
    }, 1000);
  };

  return (
    <>
      <button onClick={addProductToCart} disabled={isEnableAddToCart}>
        Add to Cart
      </button>
      <button disabled={isAdjust}>Delete</button>
      <button
        disabled={isAdjust}
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
