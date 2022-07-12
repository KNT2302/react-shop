import React from "react";
import { ProdTable } from "./ProdTable";
import "./product_list.scss";

const ProductPage = ({ handleToggle, handleClickUpdate, getProductUpdate }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleToggle();
        }}
      >
        Add product
      </button>
      <ProdTable
        handleClickUpdate={handleClickUpdate}
        getProductUpdate={getProductUpdate}
      />
    </div>
  );
};
export default ProductPage;
