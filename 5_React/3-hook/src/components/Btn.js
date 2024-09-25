// 구조분해 할당방식 추천
// 자식이 가진 click, text값을 사용하겠다!
const Btn = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
};
export default Btn;
