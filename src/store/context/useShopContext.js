import { useContext } from "react";
import { ShopContext } from "./Provider";

export const useShopContext = () => {
  const { state, dispatch } = useContext(ShopContext);

  return { state, dispatch };
};
