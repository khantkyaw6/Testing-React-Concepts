import React, { useEffect, useRef, useState } from "react";

const FocusInput = () => {
  const [text, setText] = useState("");
  const inputRef = useRef("");

  console.log("render");

  const submitHandler = (e) => {
    e.preventDefault();

    const ab = inputRef.current.value;
    console.log({ ab });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" autoFocus ref={inputRef} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FocusInput;
