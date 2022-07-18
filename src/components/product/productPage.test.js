import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import { ShopProvider } from "../../store";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonActionProvider } from "../context";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

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

test("Add product to cart", () => {
  const productLink = screen.getByRole("link", {
    name: "Products",
  });

  userEvent.click(productLink);

  const buttonAddToCart = screen.getByRole("button", {
    name: "Add to Cart",
  });

  act(() => {
    userEvent.click(buttonAddToCart);
  });

  expect(screen.getByText("Added to cart")).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByText("Added to cart")).not.toBeInTheDocument();
  }, 1000);
});
