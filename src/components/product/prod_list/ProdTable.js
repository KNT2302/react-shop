import React from "react";
import { useShopContext } from "../../../store";
import { ProductTableRow } from "./ProductTableRow";

export const ProdTable = ({
  handleClickUpdate,
  getProductUpdate,
  changeAddingToCart,
  getIsAddingToCart,
}) => {
  const { state } = useShopContext();

  const isAddingToCart = getIsAddingToCart();

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
              handleClickUpdate={handleClickUpdate}
              getProductUpdate={getProductUpdate}
              changeAddingToCart={changeAddingToCart}
              isAddingToCart={isAddingToCart}
            />
          );
        })}
      </tbody>
    </table>
  );
};
