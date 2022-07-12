import React, { useState } from "react";
import ProductPage from "./prod_list/ProductPage";
import { ProductForm } from "./prod_form/index";
import { useShopContext } from "../../store";
import { ProductUpdate } from "./prod_update";

const Products = () => {
  const [toggle, setToggle] = useState(true);
  const [isNeededUpdate, setIsNeededUpdate] = useState(false);
  const [product, setProduct] = useState({});

  const { state } = useShopContext();

  const handleToggle = () => {
    setToggle(!toggle);
    setIsNeededUpdate(false);
  };
  const handleClickUpdate = () => {
    setIsNeededUpdate(!isNeededUpdate);
  };

  const getProductUpdate = (index) => {
    //const findedProduct = state.product.find((prod) => prod.id === id);
    setProduct({index, productUpdate: state.product[index]});
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
      {isNeededUpdate ? (
        <ProductUpdate
          product={product}
          handleClickUpdate={handleClickUpdate}
        />
      ) : null}
    </div>
  );
};

export default Products;
