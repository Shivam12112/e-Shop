import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-12">
          <p className="display-5 p-2">Product List</p>
          {this.state.products.map((prod) => {
            return (
              <>
                <Product
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />
              </>
            );
          })}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = async () => {
    // console.log("From ProductList Component..");
    let response = await fetch("http://localhost:4000/products", {
      method: "GET",
    });
    let jsonResponse = await response.json();
    this.setState({ products: jsonResponse });
  };

  handleIncrement = (product) => {
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product.productName);
    console.log(product);

    let quantity1 = newProducts[index].quantity;
    console.log(quantity1);
    if (quantity1 < 10) {
      newProducts[index].quantity++;
      this.setState({ products: newProducts });
    }
  };
  handleDecrement = (product) => {
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product);
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity--;
      this.setState({ products: newProducts });
    }
  };

  handleDelete = (product) => {
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product);
    if (window.confirm("Are you sure?")) {
      newProducts.splice(index, 1);
      this.setState({ products: newProducts });
    }
  };
}
