import { cleanup, render, screen } from '@testing-library/react'
import { reducer } from '../../store'
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../../store/actions/constants'
import Products from './Products'



describe("Product page", () => {
  const mockInitData = {
    cart: [],
    product: []
  }
  const fakeProduct = {
    id: "111",
    prodName: "Cocacola",
    price: 20000,
    quantity: 10,
  }
  it("should show product page without crashing", () => {
    render(<Products />)
    expect(screen.getByTestId("product-test")).toBeInTheDocument()
  })
  it("add product", () => {
    expect.assertions(2)
    const call = { type: ADD_PRODUCT, payload: fakeProduct }
    const state = reducer(mockInitData, call)
    const res = state?.product.find(value => value.id === fakeProduct.id)
    expect(res.quantity).toEqual(10)
    expect(res.prodName).toEqual("Cocacola")
  })

  it("remove product", () => {
    expect.assertions(1)
    const call = { type: REMOVE_PRODUCT, payload: fakeProduct.id }
    const state = reducer(mockInitData, call)
    expect(state?.product.find(value => value.id === fakeProduct.id)).toEqual(undefined)
  })
})
