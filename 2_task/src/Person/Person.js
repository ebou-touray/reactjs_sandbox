import React from 'react';

function Person(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age:{props.age}</p>
    </div>
  );
}
