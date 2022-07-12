import React, { useState } from "react";
import ProductPage from "./prod_list/ProductPage";
import { ProductForm } from "./prod_form/index";
import { useShopContext } from "../../store";
import { ProductUpdate } from "./prod_update";

const Products = () => {
  console.log("render");
  const [toggle, setToggle] = useState(true);
  const [isNeededUpdate, setIsNeededUpdate] = useState(false);
  const [product, setProduct] = useState({});

  const { state } = useShopContext();
  console.log(product);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleClickUpdate = () => {
    setIsNeededUpdate(!isNeededUpdate);
  };

  const getProductUpdate = (id) => {
    const product = state.product.filter((prod) => prod.id === id);
    setProduct(...product);
  };

  return (
    <div>
      {toggle ? (
        <ProductPage
          handleToggle={handleToggle}
          handleClickUpdate={handleClickUpdate}
          getProductUpdate={getProductUpdate}
        />
      ) : (
        <ProductForm handleToggle={handleToggle} />
      )}
      {isNeededUpdate ? <ProductUpdate product={product} /> : null}
    </div>
  );
};

export default Products;
