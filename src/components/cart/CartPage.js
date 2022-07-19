import React from "react"
import { actions, useShopContext } from "../../store"

const CartPage = () => {
  const { state, dispatch } = useShopContext()

  const removeFromCart = (id) => {
    dispatch(actions.removeFromCart(id))
  }

  return (
    <div data-testid="cart-test">
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
          {state?.cart.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.prodName}</th>
                <th>{item.price}</th>
                <th>{item.quantity}</th>
                <th>
                  <button
                    onClick={() => {
                      removeFromCart({ id: item.id, quantity: item.quantity })
                    }}
                  >
                    Remove
                  </button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CartPage
