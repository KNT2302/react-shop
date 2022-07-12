import React from "react";
import { Formik } from "formik";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import { useHistory } from "react-router-dom";

export const ProductForm = ({ handleToggle }) => {
  const { dispatch } = useShopContext();
  const history = useHistory();

  return (
    <div>
      <button onClick={handleToggle}>Back</button>
      <br />
      <Formik
        initialValues={{
          id: "",
          prodName: "",
          price: "",
          quantity: "",
          isCarted: false,
        }}
        onSubmit={(values) => {
          const id = Math.random() + "";
          const getId = id.slice(id.length - 4);
          console.log(getId);
          const newProduct = {
            ...values,
            id: getId,
          };
          console.log(newProduct);
          handleToggle();
          dispatch(actions.addProduct(newProduct));
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
            <button type="submit">Add Product</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
