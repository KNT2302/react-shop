import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import { ShopProvider } from "../../store";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonActionProvider } from "../context";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

beforeEach(() => {
  render(
    <Router>
      <ShopProvider>
        <ButtonActionProvider>
          <App />
        </ButtonActionProvider>
      </ShopProvider>
    </Router>
  );
});

test("cart is empty", () => {
  const cartLink = screen.getByRole("link", {
    name: "Cart",
  });
  userEvent.click(cartLink);
  const cartEmptyText = screen.getByText(/cart is empty/i);
  expect(cartEmptyText).toBeInTheDocument();
});

test("remove product from cart", () => {
  const productLink = screen.getByRole("link", {
    name: "Products",
  });

  const cartLink = screen.getByRole("link", {
    name: "Cart",
  });

  userEvent.click(productLink);

  const buttonAddToCart = screen.getByRole("button", {
    name: "Add to Cart",
  });

  fireEvent.click(buttonAddToCart);

  userEvent.click(cartLink);

  const cartEmptyText = screen.queryByText("Cart is empty");
  expect(cartEmptyText).not.toBeInTheDocument();

  const removeProductButton = screen.getByRole("button");

  fireEvent.click(removeProductButton);
  expect(screen.getByText("Cart is empty")).toBeInTheDocument();
});
