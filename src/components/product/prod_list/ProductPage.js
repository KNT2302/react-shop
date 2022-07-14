import React from "react";
import { ProdTable } from "./ProdTable";
import "./product_list.scss";
import { useBtnsContext } from "../../context";

const ProductPage = ({ getProductUpdate }) => {
  const { setState } = useBtnsContext();
  return (
    <div>
      <button
        onClick={() => {
          setState.handleToggle();
        }}
      >
        Add product
      </button>
      <ProdTable getProductUpdate={getProductUpdate} />
    </div>
  );
};
export default ProductPage;
