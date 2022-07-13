import React, { useState } from "react";
import ProductPage from "./prod_list/ProductPage";
import { ProductForm } from "./prod_form/index";
import { useShopContext } from "../../store";
import { ProductUpdate } from "./prod_update";

const Products = () => {
  const [toggle, setToggle] = useState(true);
  const [isNeededUpdate, setIsNeededUpdate] = useState(false);
  const [product, setProduct] = useState({});
  const [isAddingToCart, setIsAddingToCart] = useState(null);

  const { state } = useShopContext();

  const handleToggle = () => {
    setToggle(!toggle);
    setIsNeededUpdate(false);
  };
  const handleClickUpdate = () => {
    setIsNeededUpdate(!isNeededUpdate);
  };

  const getProductUpdate = (id) => {
    const findedProduct = state.product.find((prod) => prod.id === id);
    setProduct(findedProduct);
  };

  const changeAddingToCart = (idProduct) => {
    setIsAddingToCart(idProduct);
  };

  const getIsAddingToCart = () => {
    return isAddingToCart;
  };

  return (
    <div>
      {toggle ? (
        <ProductPage
          handleToggle={handleToggle}
          handleClickUpdate={handleClickUpdate}
          getProductUpdate={getProductUpdate}
          changeAddingToCart={changeAddingToCart}
          getIsAddingToCart={getIsAddingToCart}
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
