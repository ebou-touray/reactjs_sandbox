import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <>
        <div className="page-container">
          <div className="content-wrap">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/newpost" component={NewPost} />
            </Switch>
          </div>
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default App;
