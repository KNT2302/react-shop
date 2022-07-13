import { ADD_PRODUCT, UPDATE_PRODUCT } from "../actions/constants";

export const initState = {
  product: [
    {
      id: "1",
      prodName: "Product1",
      price: 20000,
      quantity: 18,
      isCarted: false,
    },
  ],
  cart: [
    {
      id: "1",
      prodName: "Product1",
      price: 20000,
      quantity: 1,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    }
    case UPDATE_PRODUCT: {
      let indexProduct = -1;
      let finedProduct = false;
      while (!finedProduct) {
        indexProduct++;
        if (action.payload.id === state.product[indexProduct].id) {
          finedProduct = true;
        }
      }
      state.product[indexProduct] = action.payload;
      return {
        ...state,
        product: state.product,
      };
    }
    default: {
      return state;
    }
  }
};
