import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import App from "../../App";
import { ShopProvider } from "../../store";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonActionProvider } from "../context";
import userEvent from "@testing-library/user-event";

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

const navigateToProDuctPage = () => {
  const productLink = screen.getByRole("link", {
    name: "Products",
  });

  userEvent.click(productLink);
};

const clickButton = (buttonName) => {
  const button = screen.getByRole("button", { name: buttonName });

  userEvent.click(button);
};

const expectButtonElementExpectDisable = (name) => {
  const buttonElement = screen.getByRole("button", { name: name });

  expect(buttonElement).toBeDisabled();
};

test("Add product to cart", () => {
  navigateToProDuctPage();

  clickButton("Add to Cart");

  expect(screen.getByText("Added to cart")).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByText("Added to cart")).not.toBeInTheDocument();

    expectButtonElementExpectDisable("Delete:");

    expectButtonElementExpectDisable("Update:");
  }, 1000);
});

test("Add to cart button is disable when quantity is zero", () => {
  navigateToProDuctPage();

  const quantityChoose = screen.getByRole("spinbutton");

  userEvent.type(quantityChoose, "18");

  clickButton("Add to Cart");

  expect(screen.getByText("Added to cart")).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByText("Added to cart")).not.toBeInTheDocument();

    expectButtonElementExpectDisable("Delete:");

    expectButtonElementExpectDisable("Update:");

    expectButtonElementExpectDisable("Add to Cart");
  }, 1000);
});

test("Should change state from product list to add product form", () => {
  navigateToProDuctPage();

  clickButton("Add product");

  clickButton("Back");

  const addProductButtonAgain = screen.getByRole("button", {
    name: "Add product",
  });

  expect(addProductButtonAgain).toBeInTheDocument();
});

test("Test remove product from list", () => {
  navigateToProDuctPage();

  clickButton("Delete");

  setTimeout(() => {
    expect(screen.getAllByRole("row").length).toBe(1);
  }, 1000);
});
