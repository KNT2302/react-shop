import React from "react";

export const ButtonAction = ({
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
          getProductUpdate(idProd);
          handleClickUpdate();
        }}
      >
        Update
      </button>
    </>
  );
};
