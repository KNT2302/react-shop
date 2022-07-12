import React, { useState } from "react";
import ProductPage from "./prod_list/ProductPage";
import { ProductForm } from "./prod_form/index";

const Products = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle ? (
        <ProductPage handleToggle={handleToggle} />
      ) : (
        <ProductForm handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Products;
