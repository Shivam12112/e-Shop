import React, { Component } from "react";
export default class Example extends Component {
  state = { pageTitle: "Students", studentsCount: 5 };
  render() {
    return (
      <div>
        <h4 className='border-bottom m-1 p-1'>
          {this.state.pageTitle}
          <span className='badge bg-secondary m-2'>
            {this.state.studentsCount}
          </span>
          <button className='btn btn-info' onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }
  onRefreshClick = () => {
    console.log("Refresh clicked");
    this.setState({
      studentsCount: 7,
    });
  };
}
