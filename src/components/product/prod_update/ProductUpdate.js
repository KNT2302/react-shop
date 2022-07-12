import React from "react";
import { Formik } from "formik";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import "./productUpdate.scss";

const ProductUpdate = ({ product, handleClickUpdate }) => {
  const { dispatch } = useShopContext();
 const {index, productUpdate: prod} = product

  return (
    <div className="productUpdate">
      <Formik
        initialValues={{
          id: prod.id,
          prodName: prod.prodName,
          price: prod.price,
          quantity: prod.quantity,
          isCarted: prod.isCarted,
        }}
        onSubmit={(values) => {
          handleClickUpdate();
          dispatch(actions.updateProduct({index, newProduct: values}));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th>
                    <label>Name Product: </label>
                  </th>
                  <th>
                    <input
                      type="text"
                      name="prodName"
                      onChange={handleChange}
                      value={values.prodName}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <label>Price: </label>
                  </th>
                  <th>
                    <input
                      type="number"
                      name="price"
                      onChange={handleChange}
                      value={values.price}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <label>Quantity Available: </label>
                  </th>
                  <th>
                    <input
                      type="number"
                      name="quantity"
                      onChange={handleChange}
                      value={values.quantity}
                    />
                  </th>
                </tr>
              </tbody>
            </table>

            <br />
            <button type="submit">Update Product</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductUpdate;
