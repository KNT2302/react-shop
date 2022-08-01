import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "./constants";

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

export const removeProduct = (payload) => {
  return {
    type: REMOVE_PRODUCT,
    payload,
  };
};
