import React from "react";

export const ButtonAction = ({
  indexProduct,
  idProd,
  isCarted,
  handleClickUpdate,
  getProductUpdate,
}) => {
  return (
    <>
      <button>Add to Cart</button>
      <button disabled={isCarted}>Delete</button>
      <button
        disabled={isCarted}
        onClick={() => {
          getProductUpdate(indexProduct);
          handleClickUpdate();
        }}
      >
        Update
      </button>
    </>
  );
};
