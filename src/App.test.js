import { render } from "@testing-library/react";
import App from "./App";
import { ShopProvider } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonActionProvider } from "./components/context";

test("render app", () => {
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
