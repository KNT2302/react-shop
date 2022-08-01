import React from "react";
import { actions } from "../../store";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Index = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const removeFromCart = (id, quantity) => {
    dispatch(actions.cartActions.removeFromCart(id, quantity));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.prodName}</th>
                <th>{item.price}</th>
                <th>{item.quantity}</th>
                <th>
                  <button
                    onClick={() => {
                      removeFromCart(item.id, item.quantity);
                    }}
                  >
                    Remove
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
