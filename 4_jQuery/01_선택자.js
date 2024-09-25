//window.addEventListener("DOMContentLoaded", function () {})
// 1.태그 선택자
// 자바 스크립트 방식
//$(document).ready(function () {

$(function () {
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }

  // 제이쿼리 방식

  $("h5").css("color", "skyblue").css("background-color", "yellow");

  //2. 아이디 선택자
  // 자바스크립트 방식 -> id가 id1인 글씨 색깔 변경
  const h3id1 = document.querySelector("#id1");
  h3id1.style.color = "yellow";

  //제이쿼리 방식

  $("#id2").css("color", "skyblue");

  // 3. 클래스 선택자
  //제이쿼리 -> class가 item인 글씨 색깔 및 배경 색깔 변경

  //4. 자식 선택자와 자손 선택자
  $(".item").css({ color: "white", "background-color": "indigo" });

  $("div>ul>li").css("color", "green");
  $("div >ul>li.ch").css("background-color", "lime");
  $("li>h3").css("color", "indianred");
  $("h3.ch").css("color", "violet");
  $("div h3").css("backgroundColor", "khaki");

  // 5. 속성 선택자
  // 태그[속성] : 해당 태그의 속성을 가지는 요소
  $("#div1 input[class]").css("backgroundColor", "turquoise");
  // 태그[속성=값] : 특정 속성과 값이 일치하는 요소
  $("#div1 input[type=text]").val("change value");
  // 태그[속성*=값] : 해당 속성의 값을 포함하는 요소
  $("#div1 input[class*=st3]").css({ width: "100px", height: "100px" });
  // 태그[속성~=값] : 공백을 포함한 속성값이 일치하는 요소
  $("#div1 input[class~=test1]").val("123456789");
  // 태그[속성^=값] : 지정한 속성값으로 시작하는 요소
  $("#div1 input[type^=ra]").prop("checked", true);
  // 태그[속성$=값] : 지정한 속성값으로 끝나는 요소
  $("#div1 input[type$=box]").prop("checked", true);
  // 태그[속성!=값] : 해당 속성값을 갖지 않는 요소
  $("#div1 input[type!=text]").css("backgroundColor", "yellow");

  // 6. 입력 양식 선택자
  $("#div2 :text").css("background", "pink");
  //button -> vlaue 값 "버튼 " 추가
  // checkbox -> 속성 checked를 true
  // file -> 배경색 skyblue

  $("#div2 :button").val("버튼");
  $("#div2 :checkbox").prop("checked", true);
  $("#div2 :file").css("background", "skyblue");

  // 7. 입력 양식 상태에 대한 선택자
  // input 태그 중 활성화된 요소 선택
  $("#div3 input:enabled").css("backgroundColor", "lavender");
  // input 태그 중 비활성화된 요소 선택
  $("#div3 input:disabled").css("backgroundColor", "lightcyan");
  // input 태그 중 체크된 요소 선택
  $("#div3 input:checked").css({ width: "30px", height: "30px" });
  // checkbox에 change 이벤트 핸들러 등록

  $("#div3 :checkbox").change(function () {
    console.log(this);
    console.log($(this));
    let checkbox = $(this);
    console.log(checkbox.prop("checked")); // checked가  true or false
    console.log(checkbox.attr("checked")); // checked가 있는지 없는지
  });
  //select에 change 이벤트 핸들러 등록
  $("#national ").change(function () {
    // select 태그의 option 태그 중 선택된 요소
    let value = $("select > option:selected").val();
    // id가 result인 input값으로 추가
    console.log(value);
    $("#result").val(value);
  });
});
