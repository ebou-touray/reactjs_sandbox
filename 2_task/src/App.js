import React from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  return (
    <div>
      <h1> Hello, World!</h1>
      <p>Hello, World!</p>
      <Person name="Ebou" age="40" />
      <Person name="Baboucarr" age="10" />
      <Person name="Mariatou" age="5" />
      <Person name="Ancha" age="2" />
      <Person name="Ame" age="32" />
    </div>
  );
};
export default App;
