import React from "react";
import { useShopContext } from "../../../store";
import { ProductTableRow } from "./ProductTableRow";

export const ProdTable = ({ getProductUpdate }) => {
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
            <ProductTableRow
              key={item.id}
              item={item}
              getProductUpdate={getProductUpdate}
            />
          );
        })}
      </tbody>
    </table>
  );
};
