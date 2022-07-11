import React from "react";
import { ProdTable } from "./ProdTable";

export const index = ({ handleToggle }) => {
  return (
    <div>
      <button onClick={handleToggle}>Add product</button>
      <ProdTable />
    </div>
  );
};
