import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  };
  addHandler = () => {
    console.log("Test");
    this.setState({ likes: this.state.likes + 1 });
  };

  removeHandler = () => {
    console.log("Test");
    this.setState({ likes: this.state.likes - 1 });
  };

  resetHandler = () => {
    console.log("Test");
    this.setState({ likes: this.state.likes = 0 });
  };

  render() {
    return (
      <div>
        <h1>Total likes:{this.state.likes}</h1>
        <button onClick={this.addHandler}>Add likes</button>
        <button onClick={this.removeHandler}>Remove likes</button>
        <button onClick={this.resetHandler}>Reset likes</button>
      </div>
    );
  }
}
export default App;
