/*const img = document.querySelectorAll(".images img");
console.log(img);
const num = Math.floor(Math.random() * 3 + 1);
console.log(num);
const num1 = Math.floor(Math.random() * 3 + 1);
const num2 = Math.floor(Math.random() * 3 + 1);

click.onclick = function () {
  const num = Math.floor(Math.random() * 3 + 1);
  const num1 = Math.floor(Math.random() * 3 + 1);
  const num2 = Math.floor(Math.random() * 3 + 1);

  document.getElementById("img1").src = `../resources/family${num}.jpg`;
  document.getElementById("img2").src = `../resources/family${num1}.jpg`;
  document.getElementById("img3").src = `../resources/family${num2}.jpg`;
  const count = document.querySelector("span");

  count.innerHTML = "1";

  if (num === num1 && num1 === num2) {
    result.innerHTML = "congratulation!! press restart to play again~!!";


  }
};
const result = document.querySelector("#result");

restart.onclick = function () {
  location.reload();
}; */

// 선생님 풀이
const images = document.querySelectorAll(".images img");

const span = document.querySelector("#click span");
let count = 0;

function clickHandler() {
  const random = [
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
  ];
  //이미지들이 랜덤으로 계속 바뀜
  //내가 클릭한 만큼 숫자가 증가
  span.innerHTML = ++count;
  // 아래 결과 텍스트가 나오면서 클릭 불가
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../resources/family${random[i]}.jpg`);
  }
  if (random[0] === random[1] && random[1] === random[2]) {
    // click.disabled = true; // 버튼 비활성화
    click.setAttribute("disabled", "disabled"); // 버튼 비활성화 2
    result.innerHTML = "congratulation!! press restart to play again~!!";
  }
}

function restartHandler() {
  // 이미지 초기 셋팅 값으로 변경
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../resources/family${i + 1}.jpg`);

    // 숫자는 다시 0으로 셋팅하고 span 태그 값 비우기
    span.innerHTML = "";
    count = 0;
    // 아래 텍스트도 값 비우기
    result.innerHTML = "";

    // 버튼에 disabled값 삭제 -> 속성 삭제는 removeArrtibute
    click.removeAttribute("disabled");
  }
}

click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);
let answer = [];

for (let i = 0; i <= 100; i++) {
  {
    answer[i] = i * 2 + 1;
  }
}
console.log(answer);

answer[0] = 1;
answer[1] = 3;
answer[2] = 5;
answer[3] = 7;
answer[0] = 9;
answer[0] = 11;
answer[0] = 13;
