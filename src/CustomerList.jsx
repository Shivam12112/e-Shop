import React, { Component } from "react";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Customers List",
      customers: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}</h4>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="col-md-2">Photo</th>
              <th className="col-md-2">ID</th>
              <th className="col-md-2">Name</th>
              <th className="col-md-2">Phone</th>
              <th className="col-md-2">Email</th>
              <th className="col-md-2">Password</th>
            </tr>
          </thead>

          {this.getCustomerRow()}
        </table>
      </React.Fragment>
    );
  }
  componentDidMount = async () => {
    document.title = "Customer-Service";
    let response = await fetch("http://localhost:4000/customers", {
      method: "GET",
    });
    let data = await response.json();
    this.setState({ customers: data });
  };
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tbody>
          <tr>
            <td>
              <img src={cust.photo} alt="" />
              <button
                className="btn btn-sm btn-primary ms-2"
                onClick={() => {
                  this.onChangePicture(cust, index);
                }}
              >
                Change IMG
              </button>
            </td>
            <td>{cust.id}</td>
            <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>
            <td>{cust.phone}</td>
            <td>{cust.email}</td>
            <td>
              <td> {cust.password}</td>
              <i> </i>
            </td>
          </tr>
        </tbody>
      );
    });
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return "bg-info";
    else if (custName.startsWith("A")) return "bg-danger";
    else return {};
  };

  onChangePicture = (cust, index) => {
    console.log(cust);
    console.log(index);
    var newCustArr = this.state.customers;
    newCustArr[index].photo = "https://picsum.photos/id/104/80";
    this.setState({ customers: newCustArr });
  };
}
