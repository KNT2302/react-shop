import { createContext, useContext, useReducer } from "react"
import { initState, reducer } from "../reducers/index"

export const ShopContext = createContext(initState)

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState)
  const values = { state, dispatch }

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>
}

export const useShopContext = () => useContext(ShopContext)
