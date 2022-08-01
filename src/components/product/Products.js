import React, { useState } from "react";
import ProductPage from "./prod_list/ProductPage";
import { FormProduct } from "./prod_form/FormProduct";

import { ProductUpdate } from "./prod_update";
import { useBtnsContext } from "../context";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Products = () => {
  const [foundProduct, setFoundProduct] = useState({});

  const { product } = useSelector((state) => state.product);

  const { state: buttonState } = useBtnsContext();

  const getProductUpdate = (id) => {
    const findedProduct = product.find((prod) => prod.id === id);
    setFoundProduct(findedProduct);
  };

  return (
    <div>
      {buttonState.isToggleForm ? (
        <ProductPage getProductUpdate={getProductUpdate} />
      ) : (
        <FormProduct />
      )}
      {buttonState.isNeededUpdate ? (
        <ProductUpdate product={foundProduct} />
      ) : null}
    </div>
  );
};

export default Products;
