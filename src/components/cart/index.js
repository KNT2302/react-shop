import React from "react";
import {useShopContext} from "../../store"

const Index = () => {
  const { state } = useShopContext();
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
                  <button>Remove</button>
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
