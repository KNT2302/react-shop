import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../../App";
import { ShopProvider } from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonActionProvider } from "../../context";
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

const goToProductPage = () => {
  const productLink = screen.getByRole("link", {
    name: "Products",
  });

  userEvent.click(productLink);
};
const typingInElement = (element, typingContent) => {
  element.value = "";

  userEvent.type(element, typingContent);
};

test("Should get correctly product want to update", () => {
  goToProductPage();

  const updateButton = screen.getByRole("button", { name: "Update" });

  userEvent.click(updateButton);

  const nameProductInput = screen.getByRole("textbox");

  expect(nameProductInput.value).toBe("Product1");

  expect(screen.getByPlaceholderText("price").value).toBe("20000");
  expect(screen.getByPlaceholderText("quantity").value).toBe("18");
});

test("Should update product completely", async () => {
  goToProductPage();

  const updateButton = screen.getByRole("button", { name: "Update" });

  userEvent.click(updateButton);

  typingInElement(screen.getByRole("textbox"), "Pepsi");

  typingInElement(screen.getByPlaceholderText("price"), "50000");

  typingInElement(screen.getByPlaceholderText("quantity"), "20");

  const updateProductButton = screen.getByRole("button");

  userEvent.click(updateProductButton);

  await waitFor(() => {
    expect(screen.getByText("Pepsi")).toBeInTheDocument();
  });
  expect(screen.getByText("50000")).toBeInTheDocument();
  expect(screen.getByText("20")).toBeInTheDocument();
});
