import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/constants";

export const initState = {
  cart: [],
  isPending: false,
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    }
    case "UPDATE_PRODUCT_IN_CART": {
      return {
        ...state,
      };
    }
    case ADD_TO_CART: {
      const { id, quantity } = action.payload;
      // const { id, quantity } = action.payload
      //       const indexProductInCart = findIndexProductById(id, state.cart)
      //       let productToAdd = state.product[findIndexProductById(id, state.product)]
      //
      //       const changeQuantityInProduct = (product, quantityChoose) => {
      //         product.quantity -= quantityChoose
      //       }
      //
      //       if (productToAdd.quantity !== 0) {
      //         changeQuantityInProduct(productToAdd, quantity)
      //         productToAdd.isCarted = true
      //         if (indexProductInCart === -1) {
      //           productToAdd = { ...productToAdd, quantity }
      //           return {
      //             ...state,
      //             cart: [...state.cart, productToAdd],
      //           }
      //         } else {
      //           let quantityInCart = state.cart[indexProductInCart].quantity
      //           quantityInCart += quantity
      //           state.cart[indexProductInCart].quantity = quantityInCart
      //         }
      //       }
      const cartIdx = state.cart.map((v) => v.id).indexOf(id);
      const prdIdx = state.product.map((v) => v.id).indexOf(id);
      if (cartIdx >= 0) {
        state.cart[cartIdx].quantity =
          +state.cart[cartIdx].quantity + +quantity;
      } else {
        state.cart = [
          ...state.cart,
          { ...state.product[prdIdx], quantity: action.payload.quantity },
        ];
      }
      state.product[prdIdx].quantity -= +quantity;
      return { ...state };
    }
    case REMOVE_FROM_CART: {
      const { id, quantity } = action.payload;
      const prdIdx = state.product.map((v) => v.id).indexOf(id);
      state.product[prdIdx].quantity += quantity;
      return { ...state, cart: state.cart.filter((v) => v.id !== id) };
    }
    default: {
      return state;
    }
  }
};
