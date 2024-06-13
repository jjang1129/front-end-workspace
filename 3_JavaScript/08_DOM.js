function btn1() {
  console.log(document.head);
  console.log(document.body);

  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]); // <div> Hello, wordl! </div>
  console.log(div[1]); // <div> Hello, javascript </div>
}

function btn2() {
  const div = document.getElementById("testId");
  console.log(div);
}
// 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
function btn3() {
  const div = document.getElementsByClassName("testClass");
  console.log(div[0]);
}
// 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
function btn4() {
  const div = document.getElementsByName("testName");
  console.log(div[0]);
}
// 선택자로 가져오기
function btn5() {
  let div = document.querySelector("#testId2"); // 아이디가 #tesId2인거 딱 하나만 가져옴
  console.log(div);
  div = document.querySelectorAll("div"); //div 태그 전부다 가져옴 div 태그가 3개 있기 때문에 배열로 리턴 배열 순서는 div태그가 작성된순서 원하는 div를 가져오고 싶다면
  //div[] 안에 원하는 수를 입력할것
  console.log(div[0]); // 가장 첫번쨰 div 태그가 출력됨
}

function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>"; // 텍스트 그대로 출력
  div[1].innerHTML = "<span>안녕하세요</span>"; // 태그가 있다면 태그로 만들어줌
  console.log(div[1].innerHTML);
}

function btn7() {
  const div = document.querySelector("#testId2");
  div.getAttribute("data-test");
  console.log(div.getAttribute("data-test"));
}

function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}

const div = document.querySelector("#testId2");

function btn9() {
  div.classList.add("black");
}
function btn10() {
  div.classList.remove("black");
}
function btn11() {
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}
function btn12() {
  div.classList.toggle("black");
}

function btn13() {
  const div = document.querySelector("#testId3");
  // <p>lorem Ipsum</p>
  const p = document.createElement("p");
  p.innerHTML = "lorem Ipsum";
  // div에  만든 p 태그 추가
  div.appendChild(p);
}

function btn14() {
  const div = document.querySelector("#testId3"); // ===p.parentNode
  const p = document.querySelector("p");
  // div.removeChild(p);
  p.parentNode.removeChild(p);
}
