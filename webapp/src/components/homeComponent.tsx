import React, { Component } from 'react';

class HomeComponent extends Component {
  
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: {}
    }
  };
  submitHandler = (e:any) => {
    e.preventDefault();

  }

  render = () => {
    return (
      <div className="container">
        <h1>Bank Management System</h1>
      </div>
    );
  }

  
}

export default HomeComponent;