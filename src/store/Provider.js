import { createContext, useReducer } from "react";
import { initState, reducer } from "./reducer";

export const shopContext = createContext();

export default function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <shopContext.Provider value={[state, dispatch]}>
      {children}
    </shopContext.Provider>
  );
}
