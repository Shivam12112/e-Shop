import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
  this.state = { product: this.props.product };
  }
  render() {
    return (
      <React.Fragment>
        <div className=''>
          <div className='contanier'>
            <div className='card cardSize mb-3 mx-3'>
              <span
                className='pull-right hand-icon text-end m-1'
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className='fa-solid fa-xmark'></i>
              </span>
              <img
                src={this.state.product.logo}
                className='card-img-top image-fluid image mx-auto'
                alt='...'
              />

              <div className='p-2 ms-2'>
                <h5 className='h2'>
                  {this.state.product.id}. {this.state.product.productName}
                </h5>
                <p className='h5'>
                  <i className='fa-solid fa-indian-rupee-sign me-1'></i>
                  {this.state.product.price}
                </p>
                <p className='h5'>
                  <button
                    type='button'
                    className='btn-sm btn btn-outline-primary me-2'
                    onClick={() => {
                      this.props.onDecrement(this.state.product);
                    }}
                  >
                    <i className='fa-solid fa-minus'></i>
                  </button>

                  {this.props.product.quantity}

                  <button
                    type='button'
                    className='btn-sm btn btn-outline-primary ms-2'
                    onClick={() => {
                      this.props.onIncrement(this.state.product);
                    }}
                  >
                    <i className='fa-solid fa-plus'></i>
                  </button>
                </p>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
