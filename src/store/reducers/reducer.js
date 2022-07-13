import { ADD_PRODUCT, ADD_TO_CART, UPDATE_PRODUCT } from "../actions/constants";

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
  cart: [],
};

export const reducer = (state, action) => {
  const findIndexProductById = (id, list) => {
    let indexProduct = -1;
    let finedProduct = false;
    while (!finedProduct) {
      indexProduct++;
      if (id === list[indexProduct].id) {
        finedProduct = true;
      }
    }
    return indexProduct;
  };

  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    }
    case UPDATE_PRODUCT: {
      const indexProduct = findIndexProductById(
        action.payload.id,
        state.product
      );
      state.product[indexProduct] = action.payload;
      return {
        ...state,
        product: state.product,
      };
    }
    case ADD_TO_CART: {
      const { id, quantity } = action.payload;
      let productToAdd = state.product[findIndexProductById(id, state.product)];
      let newState = {};
      productToAdd.isCarted = true;

      const isAdded = () => {
        return state.cart.find((item) => item.id === id);
      };

      const changeQuantityInProduct = (product, quantityChoose) => {
        product.quantity -= quantityChoose;
      };
      changeQuantityInProduct(productToAdd, quantity);

      if (!isAdded()) {
        productToAdd = { ...productToAdd, quantity };
        newState = {
          ...state,
          cart: [...state.cart, productToAdd],
        };
      } else {
        let quantityInCart =
          state.cart[findIndexProductById(id, state.cart)].quantity;
        quantityInCart += quantity;
        state.cart[findIndexProductById(id, state.cart)].quantity =
          quantityInCart;
        newState = state;
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};
