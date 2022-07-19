import { render, screen } from "@testing-library/react"
import { useReducer } from "react"
import App from "../../App"
import { ShopProvider } from "../../store"
import { ADD_PRODUCT } from "../../store/actions/constants"
import { initState, reducer } from "../../store/reducers"
import CartPage from "../cart/CartPage"
import Products from "../product/Products"
import { BrowserRouter as Router } from 'react-router-dom'

describe("context suite", () => {
  it("Context updated by state from reducer", () => {
    render(
      <Router>
        <ShopProvider>
          <App>
            <Products />
          </App>
        </ShopProvider>
      </Router>
    )
    expect(screen.getByText('Welcome to my shop')).toBeInTheDocument()
  })

  it("tests error with async/await", async () => {
    expect.assertions(1)
    const mockData = {
      id: "111",
      prodName: "test",
      price: 20000,
      quantity: 10,
    }

    const call = { type: ADD_PRODUCT, payload: mockData }
    const state = reducer(initState, call)
    expect(state?.product.find(value => value.id === mockData.id)).toBe(mockData)
  })
})
