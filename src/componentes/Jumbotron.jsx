import React from "react";

const Jumbotron = ({Heading, Text, TextButton}) => {
  return (
    <>
      <h1>{Heading}</h1>
      <p>{Text}</p>
      <button type="button" className="btn btn-primary">{TextButton}</button>
    </>
  );
}

export default Jumbotron;