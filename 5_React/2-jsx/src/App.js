import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const date = new Date();
  const mili = date.getTime();

  const setCounter = () => {
    setCount(count + 10);

    console.log(mili);
  };
  const setMinus = () => {
    setCount(count - 10);
    const asd = new Date();
    const asdf = asd.getTime();
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1> Total Clicks : {count}</h1>
      <button onClick={setCounter}>+10</button>
      <button onClick={setMinus}>-10</button>
      <button onClick={reset}>reset!</button>
    </div>
  );
};

export default App;
