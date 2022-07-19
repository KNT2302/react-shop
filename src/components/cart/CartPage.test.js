import { cleanup, render, screen } from '@testing-library/react'
import { reducer } from '../../store'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/actions/constants'
import { initState } from '../../store/reducers'
import CartPage from './CartPage'

beforeEach(cleanup)
afterAll(cleanup)
afterEach(cleanup)

describe("test case for cart", () => {
  const mockInitData = {
    cart: [
      {
        id: "123",
        prodName: "Pepsi",
        price: 23000,
        quantity: 15,
      }
    ],
    product: [
      {
        id: "123",
        prodName: "Pepsi",
        price: 23000,
        quantity: 15,
      }
    ]
  }
  it("should show cart", () => {
    render(<CartPage />)
    expect(screen.getByTestId("cart-test")).toBeInTheDocument()
  })

  it("add product to cart", () => {
    expect.assertions(2)
    const call = { type: ADD_TO_CART, payload: mockInitData.product[0] }
    const state = reducer(mockInitData, call)
    const res = state?.cart.find(value => value.id === mockInitData.product[0].id)
    expect(res.quantity).toEqual(30)
    expect(res.prodName).toEqual("Pepsi")
  })

  it("remove product from cart", () => {
    expect.assertions(1)
    const call = { type: REMOVE_FROM_CART, payload: mockInitData.cart[0] }
    const state = reducer(mockInitData, call)
    expect(state?.cart.find(value => value.id === mockInitData.cart[1].id)).toEqual(undefined)
  })
})
