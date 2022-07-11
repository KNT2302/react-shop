export const initState = {
  setProduct: {
    id: "",
    prodName: "",
    price: "",
    quantity: "",
  },
  product: [
    {
      id: "1",
      prodName: "Product1",
      price: 20000,
      quantity: 18,
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
  }
};
