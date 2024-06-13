// DOMContentLoaded : DOM 구조가 로드 되고 실행 !
// 자바 스크립트를 연결할때 script가 head안에 있을경우 실행 순서 때문에 자바 스크립트가 실행이 안되는걸 막고자할때 쓰는 이벤트명이다.

window.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1"); // html의 h1 태그 내용을 const h1 이라는 변수에 담았다
  h1.onmouseenter = function () {
    //onclick: 마우스 클릭 , onmouseenter : 마우스가 올라갔을때 , onmouseleave : 마우스가 떠났을때
    h1.style.backgroundColor = "purple";
  };
  h1.onmouseleave = function () {
    h1.style.backgroundColor = "pink";
  };
  // addEventListener만 기억하셔도 괜찮아요!
  h1.addEventListener("click", function () {
    h1.style.backgroundColor = "skyblue";
  });

  /*이미지마다 이벤트 걸려면 반복문 필요!*/
  /*  const imgs = document.querySelectorAll("img");
  console.log(imgs);

  for (const item of imgs) {
    item.addEventListener("click", function (e) {
      e.currentTarget.style.display = "none";
    });
  }  */

  const container = document.querySelector(".container");

  container.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.targer !== e.currentTarget) {
      e.target.style.display = "none";
    }
  });
});
const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.targer !== e.currentTarget) {
    e.target.style.display = "none";
  }
}
