import React from "react";

const LargePersonList = ({ people }) => {
  const { name, age, hairColor, hobbies } = people;
  return (
    <>
      <h3>{name}</h3>
      <p>Age:{age} years</p>
      <p>Hair Color: {hairColor}</p>

      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonList;
