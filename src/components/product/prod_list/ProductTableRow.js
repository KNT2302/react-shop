import React, { useState } from "react";
import { ButtonAction } from "./ButtonAction";

export const ProductTableRow = ({
  item,
  handleClickUpdate,
  getProductUpdate,
  changeAddingToCart,
  isAddingToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <>
      <tr>
        <th>{item.id}</th>
        <th>{item.prodName}</th>
        <th>{item.price}</th>
        <th>{item.quantity}</th>
        {isAddingToCart === item.id ? (
          <th colSpan={2} style={{ color: "red" }}>
            Added to cart
          </th>
        ) : (
          <>
            <th>
              <input
                type="number"
                value={quantity}
                min={1}
                max={item.quantity}
                onChange={(e) => {
                  handleQuantity(e);
                }}
              />
            </th>
            <th>
              <ButtonAction
                quantityChoose={quantity}
                idProd={item.id}
                isCarted={item.isCarted}
                handleClickUpdate={handleClickUpdate}
                getProductUpdate={getProductUpdate}
                changeAddingToCart={changeAddingToCart}
              />
            </th>
          </>
        )}
      </tr>
    </>
  );
};
