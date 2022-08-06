import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBord from "./DashBord";
import Login from "./Login";
import NavBar from "./NavBar";
import CustomerList from "./CustomerList";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<DashBord />} />
          <Route exact path="/customer/list" element={<CustomerList />} />
          <Route exact path="/product/list" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
