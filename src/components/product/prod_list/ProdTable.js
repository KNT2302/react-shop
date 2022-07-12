import React from "react";
import { useShopContext } from "../../../store";
import { ButtonAction } from "./ButtonAction";

export const ProdTable = () => {
  const { state } = useShopContext();
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Choose quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {state.product.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.prodName}</th>
              <th>{item.price}</th>
              <th>{item.quantity}</th>
              <th>
                <input type="number" />
              </th>
              <th>
                <ButtonAction />
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
