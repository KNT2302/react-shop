import React from "react";
import { Formik } from "formik";
import { useShopContext, actions } from "../../../store";
import { useBtnsContext } from "../../context";
import "./productUpdate.scss";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProductUpdate = () => {
  const { state, dispatch } = useShopContext();
  const { setState } = useBtnsContext();
  const { id } = useParams();
  const { product } = state;

  const history = useHistory();

  const getProduct = () => product.find((v) => v.id === id);

  return (
    <div className="productUpdate">
      <h2>Update Product Page</h2>
      <Formik
        initialValues={getProduct()}
        onSubmit={(values) => {
          setState.handleClickUpdate();
          dispatch(actions.updateProduct(values));
          history.push("/products");
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
                    <label htmlFor="price">Price:</label>
                  </th>
                  <th>
                    <input
                      placeholder="price"
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
                      placeholder="quantity"
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
