import { useState } from "react";
import { useRef } from "react";

// 해당돔에 직접 접근하려면 useRef를 씀

const InputText = () => {
  const [text, setText] = useState(""); // 초기값
  const textRef = useRef();

  const write = (e) => {
    setText(e.target.value);
  };

  const complete = (e) => {
    console.log(textRef.current);
    alert(textRef.current.value);
    //  setText("");
    textRef.current.value = "";
    textRef.current.focus();
  };

  return (
    <>
      <input ref={textRef} onChange={write} value={text} />
      <button onClick={complete}>작성완료</button>
    </>
  );
};

export default InputText;
