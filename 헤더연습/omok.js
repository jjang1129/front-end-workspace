let String = "";

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    String += `<div class="asd" data-x =${j} data-y =${i}></div>`;
  }
}

$("#board").html(String);

$(document).ready(function () {
  var $div = $(".asd");
  var offset = $div.offset();
});

let String1 = "";
for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    String1 += `<div class="asd1" data-x =${j} data-y =${i}></div>`;
  }
}
$("#board1").html(String1);

let count = 1;

$(".asd1").click((e) => {
  let xString = $(e.target).attr("data-x"); //내가 돌을 둔곳의 x좌표
  let x = parseInt(xString, 10);
  let newX = x + 1;
  console.log(x);
  console.log(newX);
  let yString = $(e.target).attr("data-y"); //내가 돌을 둔곳의 y좌표
  let y = parseInt(yString, 10);
  let newY = y + 1;

  if (
    $(e.target).css("background") ===
      "rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box" ||
    $(e.target).css("background") ===
      "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"
  ) {
    alert("바른곳에 놓아주세요");
  } else if (count === 1) {
    $(e.target)
      .css("background", "black")
      .css("opacity", 1)
      .css("border-radius", "50%");
    console.log(
      $(".asd1[data-x=" + newX + "]" + "[data-y=" + yString + "]").css(
        "background"
      ) ===
        "rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"
    );

    if (
      $(".asd1[data-x=" + newX + "]" + "[data-y=" + (newY + 1) + "]").css(
        "background"
      ) ===
      "rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"
    ) {
      alert("옆에있넹");
    }

    for (let i = -1; i < 1; i++) {
      for (let j = -1; j < 1; j++) {
        if (
          $(".asd1[data-x=" + (x + i) + "]" + "[data-y=" + (y + j) + "]").css(
            "background"
          ) ===
          "rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"
        ) {
          alert("뭐가있다");
        }
      }
    }
    // count = 2;
  } else if (count == 2) {
    $(e.target)
      .css("background", "white")
      .css("opacity", 1)
      .css("border-radius", "50%");
    count = 1;
  }
});
//클릭한값의 data-x 값 보다 +30큰 값이 검은색 일경우 alert?
$('.asd1[data-x="0"]')
  .css("background", "black")
  .css("opacity", 1)
  .css("border-radius", "50%");
