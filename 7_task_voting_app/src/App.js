
import './App.css';
import Content from "./Components/Content";
import Button from "./Components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";


const App = () => {
  const [positive, setPositive] = useState(0);
   const [negative, setNegative] = useState(0);

  const positiveVote = () => setPositive(positive + 1);
  const negativeVote = () => setNegative(negative + 1);
  const resetVotes = () => {
    setNegative(0);
    setPositive(0);
  }

  return (
    <div>
      <Button handleClick={positiveVote} text="Ilove it.">
        <fontAwesomeIcon icon={faThumbsUp} />
      </Button>
      <Button handleClick={negativeVote} text="I hate it.">
        <fontAwesomeIcon icon={faThumbsDown} />
      </Button>
      <Button handleClick={resetVotes} text="Reset." />
      <Content positive={positive} negative={negative} />
    </div>
  );
}

export default App;
