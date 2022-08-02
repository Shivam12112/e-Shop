import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "svm@gmail.com",
      password: "shivam@123",
      message: "",
      messageStyle: "",
      customers: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <form className='mt-3'>
            <h3 className={this.state.messageStyle}>{this.state.message}</h3>
            <h2>Login Here..</h2>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                id='email'
                className='form-control'
                onChange={(event) => {
                  this.setState({ username: event.target.value });
                }}
                aria-describedby='emailHelp'
              />
              <div id='emailHelp' className='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                id='pwd'
                className='form-control'
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={this.handleLogin}
            >
              Login
            </button>
            <button type='submit' className='btn btn-primary ms-2'>
              Reset
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = async () => {
    let response = await fetch("http://localhost:4000/customers", {
      method: "GET",
    });
    let data = await response.json();
    this.setState({ customers: data });
    console.log(this.state.customers);
  };

  handleLogin = () => {
    const email = document.getElementById("email");
    const pwd = document.getElementById("pwd");
    if (
      this.state.username === email.value &&
      this.state.password === pwd.value
    ) {
      this.setState({
        message: `You're Logged-In..`,
        messageStyle: "text-success",
      });
    } else {
      this.setState({
        message: `Invalid Username or Password...`,
        messageStyle: "text-danger",
      });
    }
    setTimeout(() => {
      this.setState({ message: null });
    }, 3000);
  };
}
