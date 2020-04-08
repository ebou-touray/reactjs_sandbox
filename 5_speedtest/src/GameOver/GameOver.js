import React from 'react';
import "./GameOver.css";

const closeHandler =() => {
    window.location.reload();
}

const GameOver = props => {

    return (
      <div className="overlay">
        <div className="gameoverbox">
          <div>
            <h2>Game over</h2>
            <p>
                Final score:<span>{props.score}</span>
            </p>
          </div>
          <div>
            <button onClick={closeHandler}> Close </button>
          </div>
        </div>
      </div>
    );



}
export default GameOver;