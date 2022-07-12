import { ADD_PRODUCT } from "./constants";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};
