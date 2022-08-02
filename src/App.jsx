import React, { Component } from "react";
// import Login from "./Login";
// import Example from "./Example";
import CustomerList from "./CustomerList";
// import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Example /> */}
        <CustomerList />
        {/* <ProductList /> */}
        {/* <Login /> */}
      </React.Fragment>
    );
  }
}
export default App;
