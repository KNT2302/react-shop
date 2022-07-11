import { useContext } from "react";
import { shopContext } from "./Provider";

export const useShopContext = () => {
  const [state, dispatch] = useContext(shopContext);

  return [state, dispatch];
};
