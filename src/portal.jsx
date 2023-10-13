import React, { useState } from "react";
import { createPortal } from "react-dom";

const Portal = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "2px solid black" }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <>
          <p>This child is placed in the document body.</p>
          <br />
          <p>{count}</p>
          <br />
          <button onClick={() => setCount(count + 1)}>Click</button>
        </>,
        document.body
      )}
    </div>
  );
};

export default Portal;
