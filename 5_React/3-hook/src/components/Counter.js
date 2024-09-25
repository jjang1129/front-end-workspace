import { useState, useEffect, useRef } from "react";

import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCheckRef = useRef(false); //참조용 변수

  const setCounter = () => {
    setCount(count + 10);
  };
  const setMinus = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };
  // 앞에는 함수 뒤에는 배열
  // 마운트 (태어나는시점), 배열이 비어있어야함
  useEffect(() => {
    console.log("mount!");
  }, []);
  //업데이트되는 시점을 찾아야하는 경우
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    }
    console.log("Count Update!");
  }, [count]);

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("Unmount!");
    };
  }, []);

  return (
    <>
      <h1> Total Clicks : {count}</h1>
      <Btn click={setCounter} text="+10" />
      <Btn click={setMinus} text="-10" />
      <Btn click={reset} text="reset" />
    </>
  );
};

export default Counter;
