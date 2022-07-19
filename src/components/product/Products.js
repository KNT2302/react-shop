import React from "react";
import ProductPage from "./prod_list/ProductPage";
import { FormProduct } from "./prod_form/FormProduct";
import { useBtnsContext } from "../context";

const Products = () => {
  const { state: buttonState } = useBtnsContext();

  return (
    <div>{buttonState.isToggleForm ? <ProductPage /> : <FormProduct />}</div>
  );
};

export default Products;
