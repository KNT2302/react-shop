import { createContext, useReducer } from "react";
import { initState, reducer } from "./reducer";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
