import { createContext, useContext, useState } from "react";

export const BtnContext = createContext();

export const ButtonActionProvider = ({ children }) => {
  const [isToggleForm, setIsToggleForm] = useState(true);
  const [isNeededUpdate, setIsNeededUpdate] = useState(false);

  const handleToggle = () => {
    setIsToggleForm(!isToggleForm);
  };

  const handleClickUpdate = () => {
    setIsNeededUpdate(!isNeededUpdate);
  };

  const values = {
    state: { isToggleForm, isNeededUpdate },
    setState: {
      handleToggle,
      handleClickUpdate,
    },
  };
  return <BtnContext.Provider value={values}>{children}</BtnContext.Provider>;
};

export const useBtnsContext = () => {
  const { state, setState } = useContext(BtnContext);

  return { state, setState };
};
