import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/constants";

export const initState = {
  product: [
    {
      id: "1",
      prodName: "Product1",
      price: 20000,
      quantity: 18,
    },
  ],
  cart: [],
  isPending: false,
};

export const productReducer = (state = initState, action) => {
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
    case REMOVE_PRODUCT: {
      const newProduct = state.product.filter((v) => v.id !== action.payload);

      console.log(newProduct);
      return {
        ...state,
        product: newProduct,
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
