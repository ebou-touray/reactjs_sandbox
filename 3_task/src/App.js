import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';//importing Header.js component from Heade folder
import Footer from './Footer/Footer';//importing Footer.js comp

class App extends Component {
  state = {
    likes: 0
  };
  addHandler = () => {
    console.log("addHandler clicked");
    this.setState({ likes: this.state.likes + 1 });
  };

  removeHandler = () => {
    console.log("removeHandler clicked");
    this.setState({ likes: this.state.likes - 1 });
  };

  resetHandler = () => {
    console.log("restHandler clicked");
    this.setState({ likes: 0});
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <h1 className={
            this.state.likes === 0  ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd" } >
            Total likes:{this.state.likes}
          </h1>
          <div className="buttons">
          <button onClick={this.addHandler}>Add likes</button>
          <button onClick={this.removeHandler}>Remove likes</button>
          <button onClick={this.resetHandler}>Reset likes</button>
          </div>
        
        </main>
        <Footer/>
      </div>
    );
  }
}
export default App;
