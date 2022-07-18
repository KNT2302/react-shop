import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../../App";
import { ShopProvider } from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonActionProvider } from "../../context";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("Add new product", async () => {
  render(
    <Router>
      <ShopProvider>
        <ButtonActionProvider>
          <App />
        </ButtonActionProvider>
      </ShopProvider>
    </Router>
  );

  const productLink = screen.getByRole("link", {
    name: "Products",
  });

  userEvent.click(productLink);

  const addProductButton = screen.getByRole("button", {
    name: "Add product",
  });

  userEvent.click(addProductButton);

  const nameProduct = screen.getByRole("textbox");

  act(() => userEvent.type(nameProduct, "Pepsi"));

  const price = screen.getByRole("spinbutton", { name: "Price:" });

  act(() => {
    userEvent.type(price, "2000");
  });

  const quantity = screen.getByRole("spinbutton", {
    name: "Quantity Available:",
  });

  act(() => {
    userEvent.type(quantity, "2");
  });
  const addNewProductButton = screen.getByRole("button", {
    name: "Add Product",
  });

  fireEvent.click(addNewProductButton);

  await waitFor(() => {
    expect(screen.getByText("Pepsi")).toBeInTheDocument();
    expect(screen.getByText("2000")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
