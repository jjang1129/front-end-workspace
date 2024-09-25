// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});
// on
// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
// });
// 마우스가 내려갈 때 (mouseleave)
// -> 배경색상 : beige , 텍스트 : 마우스가 내려감

// $("#area2").on("mouseleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 내려감");
// });

// $("#area2").on("mouseenter mouseleave", (event) => {
//   if (event.type === "mouseenter") {
//     $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
//   } else if (event.type === "mouseleave")
//     $(event.target).css("background-color", "beige").text("마우스가 내려감");
// });
// $("#area2").on("click", (event) => {
//   $(event.target)
//     .css("background", "white")
//     .text("")
//     .off("mouseenter mouseleave"); // mouseenter mousueleave event 제거
// });

$("#area2").on({
  mouseenter: (event) => {
    $(event.target);
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  //키보드가 눌려질 때
  keydown: (e) => {
    console.log(`keydown-e.key:${e.key},e.keycode: ${e.keyCode}`);
  },
  //글자가 입력 될 때
  keypress: (e) => {
    console.log(`keypress-e.key:${e.key},e.keycode: ${e.keyCode}`);
  },
  // 키보드 떼어질 때
  keyup: (e) => {
    console.log(`keyup-e.key:${e.key},e.keycode: ${e.keyCode}`);
  },
});

let count = 0;

$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let length = target.val().length;
  console.log(length);
  let maxLength = parseInt($("#maxLength").text());
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(length);
  }
});

$("#userId").keyup((e) => {
  const target = $(e.target).val();
  console.log(target);
  console.log("키코드" + e.keyCode);
  console.log(target.length);
  const RegExp = /^[a-z]/;

  const RegExp1 = /^[0-9a-z]{4,12}$/;
  console.log("글자수 " + RegExp1.test(target));
  let check = RegExp.test(target);
  let check2 = RegExp1.test(target);
  console.log("첫글자 영어 소문자: " + RegExp.test(target));

  if (check && check2) {
    $("#idCheck").text("사용가능").css("color", "green");
  } else {
    $("#idCheck").text("사용불가능").css("color", "red");
  }

  if (target.length === 0) {
    $("#idCheck").text("");
  }
});

// 3. trigger() 메서드
let current = 0;
$("#area3").click((e) => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
  console.log(current);
});

$("#btn").click(() => {
  $("#area3").trigger("click");
});

$("#area3").one("click", () => {
  setTimeout(function () {
    alert("초당 클릭 횟수 :" + $("#counter2").text() / 5);
  }, 5000);
});
