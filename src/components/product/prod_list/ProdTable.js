import React from "react";
import { useSelector } from "react-redux/es/exports";
import { ProductTableRow } from "./ProductTableRow";

export const ProdTable = ({ getProductUpdate }) => {
  const { product } = useSelector((state) => state.product);

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
        {product.map((item, index) => {
          return (
            <ProductTableRow
              key={item.id}
              item={item}
              indexItem={index}
              getProductUpdate={getProductUpdate}
            />
          );
        })}
      </tbody>
    </table>
  );
};
