import React from "react";
import { ProdTable } from "./ProdTable";
import "./product_list.scss";

const ProductPage = ({ handleToggle }) => {
  return (
    <div>
      <button onClick={handleToggle}>Add product</button>
      <ProdTable />
    </div>
  );
};
export default ProductPage;
