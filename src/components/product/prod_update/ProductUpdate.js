import React from "react";
import { Formik } from "formik";
import {useShopContext} from "../../../store"
import { actions } from "../../../store";

const ProductUpdate = ({ product }) => {
  const {dispatch} = useShopContext()
  return (
    <div>
      <Formik
        initialValues={{
          id: product.id,
          prodName: product.prodName,
          price: product.price,
          quantity: product.quantity,
          isCarted: product.isCarted,
        }}
        onSubmit={(values) => {
          dispatch(actions.updateProduct(values))
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>
              Name Product:{" "}
              <input
                type="text"
                name="prodName"
                onChange={handleChange}
                value={values.prodName}
              />
            </label>
            <br />
            <label>
              Price:{" "}
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={values.price}
              />
            </label>
            <br />
            <label>
              Quantity Available:{" "}
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                value={values.quantity}
              />
            </label>
            <br />
            <button type="submit">Update Product</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductUpdate;
