import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
} from "./constants";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const updateProduct = (payload) => {
  return {
    type: UPDATE_PRODUCT,
    payload,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};
