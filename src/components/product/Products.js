import React, { useState } from "react";
import ProductPage from "./prod_list/ProductPage";
import { ProductForm } from "./prod_form/index";
import { useShopContext } from "../../store";
import { ProductUpdate } from "./prod_update";
import { useBtnsContext } from "../context";

const Products = () => {
  const [product, setProduct] = useState({});

  const { state } = useShopContext();
  const { state: buttonState } = useBtnsContext();

  const getProductUpdate = (id) => {
    const findedProduct = state.product.find((prod) => prod.id === id);
    setProduct(findedProduct);
  };

  return (
    <div>
      {buttonState.isToggleForm ? (
        <ProductPage getProductUpdate={getProductUpdate} />
      ) : (
        <ProductForm />
      )}
      {buttonState.isNeededUpdate ? <ProductUpdate product={product} /> : null}
    </div>
  );
};

export default Products;
