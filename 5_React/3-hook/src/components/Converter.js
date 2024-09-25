import { useEffect, useState } from "react";
import { useRef } from "react";
import Btn from "./Btn";

const Converter = () => {
  const type = useRef(false);

  const [typeValue, setType] = useState(1); // 1 -> 2 -> 3 -> 1 -> 2 ... 반복

  const [buttonValue, setButtonValue] = useState("for Hours"); //버튼값 바꿔줌 typeValue에 따라 바꿔주면댈듯?

  const [minValue, setMin] = useState(""); // 초기값
  const [hourValue, setHour] = useState(""); // 초기값
  const [secondValue, setSecond] = useState(""); // 초기값

  const minWrite = (e) => {
    setMin(e.target.value);
    setHour(Math.round((e.target.value / 60) * 10) / 10);
    setSecond(Math.round(e.target.value * 60 * 10) / 10);
  };

  const hourWrite = (e) => {
    setHour(e.target.value);
    setMin(Math.round(e.target.value * 60 * 10) / 10);
    setSecond(Math.round(e.target.value * 3600 * 10) / 10);
  };

  const secWrite = (e) => {
    setSecond(e.target.value);
    setMin(Math.round((e.target.value / 60) * 10) / 10);
    setHour(Math.round((e.target.value / 3600) * 10) / 10);
  };

  const min = useRef();
  const hours = useRef();
  const sec = useRef();

  const reset = () => {
    setHour(0);
    setMin(0);
    setSecond(0);
  };

  const go = () => {
    setInterval(() => {
      sec.current.value = sec.current.value - 1;
      min.current.value = sec.current.value / 60;
      hours.current.value = sec.current.value / 3600;
    }, 1000);
  };

  const change = () => {
    console.log(typeValue);
    if (typeValue === 1) {
      setButtonValue("for Seconds");
      setHour("");
      setMin("");
      setSecond("");
      setType(2);
    } else if (typeValue === 2) {
      setButtonValue("for minutes");
      setHour("");
      setMin("");
      setSecond("");

      setType(3);
    } else if (typeValue === 3) {
      setButtonValue("for Hours");
      setHour("");
      setMin("");
      setSecond("");
      setType(1);
    }
  };

  return (
    <>
      <h1>Time Converter</h1>
      Minutes
      <input
        type="number"
        ref={min}
        onChange={minWrite}
        value={minValue}
        disabled={typeValue == 1 ? false : true}
        placeholder="Minutes"
      />
      <br></br>
      Hours
      <input
        type="number"
        ref={hours}
        onChange={hourWrite}
        value={hourValue}
        placeholder="Hours"
        disabled={typeValue == 2 ? false : true}
      />
      <br></br>
      Seconds
      <input
        type="number"
        ref={sec}
        onChange={secWrite}
        value={secondValue}
        placeholder="seconds"
        disabled={typeValue == 3 ? false : true}
      />
      <br></br>
      <Btn click={reset} text="Reset" />
      <Btn click={change} text={buttonValue} />
      <Btn click={go} text="초 카운트" />
    </>
  );
};
export default Converter;
