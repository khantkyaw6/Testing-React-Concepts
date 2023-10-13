import React from "react";

const NumberList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
};

export default NumberList;
