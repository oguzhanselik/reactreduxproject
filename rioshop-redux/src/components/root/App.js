import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import Admin from "./Admin"

function App() {
  return (
    <Container>
      <Navi />
      <div style={{ marginTop:"7%" }}>
      <Switch >
        <Route path="/" exact component={Dashboard} />
        <Route path="/product"  component={Dashboard} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct" component={AddOrUpdateProduct} />
        <Route path="/cart"  component={CartDetail} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
      </div>
     
     
    </Container>
  );
}

export default App;
