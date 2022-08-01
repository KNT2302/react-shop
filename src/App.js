import { Link, Switch, Route } from "react-router-dom";
import ProductUpdate from "./components/product/prod_update/ProductUpdate";
import { Cart, Products } from "./components";
import { useShopContext, actions } from "./store";

function App() {
  const { state } = useShopContext();

  console.log(state);
  return (
    <div className="App">
      <h1>Welcome to my shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" name="cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={"/"}>
          <div>Hello World!</div>
        </Route>
        <Route exact path={"/products"}>
          <Products />
        </Route>
        <Route path={"/cart"}>
          <Cart />
        </Route>
        <Route path="/products/:id">
          <ProductUpdate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
