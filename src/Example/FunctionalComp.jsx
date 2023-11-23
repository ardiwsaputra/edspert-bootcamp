import { useEffect, useState } from "react";
import ChildComp from "./ChildComp";

function FunctionalComp() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const incrementNum = () => {
    setNum(num + 2);
  };


  useEffect(() => {
    console.log("Component Did Mount - First Load")
  }, []);

  useEffect(() => {
    console.log("Component Did Update - Render when counter or num change")
  }, [counter, num]);


  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <h1>Num: {num}</h1>
      <button onClick={incrementNum}>Increment Num</button>
      {counter <= 3 ? (
        <ChildComp text={"Hello from Funct Comp"} />
      ) : <p>Ini lebih dari 3</p> }
    </div>
  );
}

export default FunctionalComp