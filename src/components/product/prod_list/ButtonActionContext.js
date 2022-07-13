import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const BtnContext = createContext();

export const ButtonActionContext = ({ children }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const changetoAddingToCart = () => {
    setIsAddingToCart(true);
  };

  const changetoAddedToCart = () => {
    setIsAddingToCart(false);
  };

  const value = { isAddingToCart, changetoAddingToCart, changetoAddedToCart };
  return <BtnContext.Provider value={value}>{children}</BtnContext.Provider>;
};

export const useBtnActionContext = () => {
  const { isAddingToCart, changetoAddingToCart, changetoAddedToCart } =
    useContext(BtnContext);

  return { isAddingToCart, changetoAddingToCart, changetoAddedToCart };
};
