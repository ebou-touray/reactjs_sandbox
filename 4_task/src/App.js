import React, { Component } from "react";
import "./App.css";

import Form from "./Forms/Form.js";
import View from "./Views/View.js";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form onChange={this.changeHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
