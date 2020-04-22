import React from "react";


const content = ({ positive, negative }) => {
  if (positive === 0 && negative === 0) {
    return (
      <div className="content">
        <h1>
          Nothing to show yet! <br />
          Be first who give an opiniom
        </h1>
      </div>
    );
  }
  return (
    <div className="conent">
      <h1>Votes:</h1>
      <h2>Love: {positive}</h2>
      <h2>Hate: {negative}</h2>
    </div>
  );
};

export default content;
