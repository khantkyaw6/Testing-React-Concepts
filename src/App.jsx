import { useState, useEffect, useCallback, useMemo } from "react";
// import "./App.css";
// import "../src/index.css";
import Counter from "./counter";
import NormalComponent from "./normalComponent";
import SountTest from "./soundTest";
import ReactHookform from "./reactHookform";
import Portal from "./portal";
import ErrorDemo from "./errorDemo";
import FocusInput from "./FocusInput";
import { DatePicker } from "antd";
import FormSample from "./form";
import GridTest from "./GridTest";
import SplitScreen from "./SplitScreen";
import { products, people } from "../constant";
import RegularList from "./RegularList";
import SmallPersonList from "./people/SmallPersonList";
import LargePersonList from "./people/LargePersonList";
// import LoginForm from "./login/LoginForm";
// import { ErrorBoundary } from "./errorBoundy";

// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: "green" }}>Left! Hello {name}</h1>;
// };

// const RightHandComponent = ({ message }) => {
//   return (
//     <h3 style={{ backgroundColor: "red", color: "#fff" }}>Right! {message}</h3>
//   );
// };

function App() {
  // testing useCallback
  // const [count, setCount] = useState(0);
  // const [num1] = useState(4);
  // const [num2] = useState(5);
  // const sum = useCallback(() => num1 + num2, [num1, num2]);
  // // const sum = () => num1 + num2;

  // useEffect(() => {
  //   console.log("New Sum Value is :", sum());
  //   console.log("rerandered");
  //   setCount(sum());
  // }, [sum]);

  return (
    <>
      <RegularList
        items={people}
        resourceName={"people"}
        itemComponent={SmallPersonList}
      />
      <RegularList
        items={people}
        resourceName={"people"}
        itemComponent={LargePersonList}
      />
      {/* <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name={"Shawn"} />
        <RightHandComponent message={"This is mesg for shawn"} />
      </SplitScreen> */}
      {/* <GridTest /> */}
      {/* <DatePicker /> */}
      {/* <FormSample /> */}
      {/* testing useCallback  */}
      {/* {count} */}
      {/* <br /> <button onClick={() => setCount(count + 1)}>Click</button> */}
      {/* <Counter /> */}
      {/* <NormalComponent /> */}
      {/* <SountTest /> */}
      {/* <ReactHookform /> */}
      {/* <Portal /> */}
      {/* <ErrorDemo name="codedope" /> */}
      {/* <ErrorBoundary></ErrorBoundary> */}
      {/* <FocusInput /> */}
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
