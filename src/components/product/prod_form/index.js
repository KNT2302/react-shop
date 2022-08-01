import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { actions } from "../../../store";
import { useBtnsContext } from "../../context";

export const FormProduct = () => {
  const dispatch = useDispatch();
  const { setState } = useBtnsContext();

  return (
    <div>
      <button onClick={setState.handleToggle}>Back</button>
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
          const newProduct = {
            ...values,
            id: getId,
          };
          setState.handleToggle();
          dispatch(actions.productActions.addProduct(newProduct));
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
