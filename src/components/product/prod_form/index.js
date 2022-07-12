import React from "react";

export const ProductForm = ({ handleToggle }) => {
  return (
    <div>
      <button onClick={handleToggle}>Back</button>
      <br />
      <form>
        <label>
          Name Product: <input type="text" />
        </label>
        <br />
        <label>
          Price: <input type="text" />
        </label>
        <br />
        <label>
          Quantity Available: <input type="text" />
        </label>
      </form>
      <br />
      <button>Add Product</button>
    </div>
  );
};
