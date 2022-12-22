import { Link, Switch, Route } from "react-router-dom"
import { Cart, Products } from "./components"

function App() {
  console.log("test1")
  console.log("test2")
  console.log("test3")
  return (
    <div className="App">
      <h1>pEW Pew</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={"/"}>
          <div>Hello World!</div>
        </Route>
        <Route path={"/products"}>
          <Products />
        </Route>
        <Route path={"/cart"}>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default App
