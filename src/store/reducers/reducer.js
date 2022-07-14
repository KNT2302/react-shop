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
  isPending: false,
};

export const reducer = (state, action) => {
  const findIndexProductById = (id, list) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return i;
      }
    }
    return -1;
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
      const indexProductInCart = findIndexProductById(id, state.cart);
      let productToAdd = state.product[findIndexProductById(id, state.product)];

      const changeQuantityInProduct = (product, quantityChoose) => {
        product.quantity -= quantityChoose;
      };

      changeQuantityInProduct(productToAdd, quantity);

      productToAdd.isCarted = true;

      if (indexProductInCart === -1) {
        productToAdd = { ...productToAdd, quantity };
        return {
          ...state,
          cart: [...state.cart, productToAdd],
        };
      } else {
        let quantityInCart = state.cart[indexProductInCart].quantity;
        quantityInCart += quantity;
        state.cart[indexProductInCart].quantity = quantityInCart;
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
