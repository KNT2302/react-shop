import React, { useState } from "react";
import { index as Product } from "./prod_list/index";
import { index as From } from "./prod_form/index";

const Index = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle ? (
        <Product handleToggle={handleToggle}></Product>
      ) : (
        <From handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Index;
