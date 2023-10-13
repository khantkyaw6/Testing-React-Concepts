import React from "react";

const SmallPersonList = ({ people }) => {
  const { name, age } = people;
  return (
    <>
      <p>
        Name: {name}, Age: {age}
      </p>
    </>
  );
};

export default SmallPersonList;
