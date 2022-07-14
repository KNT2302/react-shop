import React from "react";
import { actions, useShopContext } from "../../store";

const Index = () => {
  const { state, dispatch } = useShopContext();

  const removeFromCart = (id) => {
    dispatch(actions.removeFromCart(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.prodName}</th>
                <th>{item.price}</th>
                <th>{item.quantity}</th>
                <th>
                  <button
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  >
                    Remove
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
