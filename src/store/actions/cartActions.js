import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addNewProductToCart = (payload) => {
  return {
    type: "ADD_NEW_PRODUCT_TO_CART",
    payload,
  };
};

export const updateProducInCart = () => {
  return {
    type: "UPDATE_PRODUCT_IN_CART",
  };
};

// export const removeFromCart = (payload) => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload,
//   };
// };

export const addToCart = (idProduct, quantity) => {
  return (dispatch, getState) => {
    const { cart, product } = getState();
    const cartIdx = cart.cart.map((v) => v.id).indexOf(idProduct);
    const prdIdx = product.product.map((v) => v.id).indexOf(idProduct);
    if (cartIdx >= 0) {
      cart.cart[cartIdx].quantity = +cart.cart[cartIdx].quantity + +quantity;
      dispatch(updateProducInCart());
    } else {
      dispatch(addNewProductToCart({ ...product.product[prdIdx], quantity }));
    }
    product.product[prdIdx].quantity -= +quantity;
  };
};

export const removeFromCart = (idProduct, quantityInCart) => {
  return (dispatch, getState) => {
    const { cart, product } = getState();
    const prdIdx = product.product.map((v) => v.id).indexOf(idProduct);
    product.product[prdIdx].quantity += quantityInCart;
    cart.cart = cart.cart.filter((v) => v.id !== idProduct);
    dispatch(updateProducInCart());
  };
};
