import React from "react";

const ErrorDemo = (props) => {
  if (props.name != "codedope") {
    throw new Error("There is an error");
  }
  return (
    <div>
      {/* <h1>Error Boundary</h1> */}

      {props.name}
    </div>
  );
};

export default ErrorDemo;
