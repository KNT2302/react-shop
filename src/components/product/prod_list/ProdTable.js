import React from "react";
import { useShopContext } from "../../../store";
import { ButtonAction } from "./ButtonAction";

export const ProdTable = ({ handleClickUpdate, getProductUpdate }) => {
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
        {state.product.map((item, index) => {
          return (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.prodName}</th>
              <th>{item.price}</th>
              <th>{item.quantity}</th>
              <th>
                <input type="number" min={1} max={item.quantity} />
              </th>
              <th>
                <ButtonAction
                indexProduct={index}
                  idProd={item.id}
                  isCarted={item.isCarted}
                  handleClickUpdate={handleClickUpdate}
                  getProductUpdate={getProductUpdate}
                />
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
