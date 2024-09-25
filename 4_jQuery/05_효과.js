// 1. show, hide , toggle
$("#show").click(() => {
  $("#img").show(3000);
});
$("#hide").click(() => {
  $("#img").hide(3000);
});
$("#toggle").click(() => {
  $("#img").toggle(3000);
});

//2. fadeIn, fadeOut, fadeToggle, fadeTo
$("#fadeIn").click(() => {
  $("#img").fadeIn(500);
});

$("#fadeOut").click(() => {
  $("#img").fadeOut(500);
});

$("#fadeToggle").click(() => {
  $("#img").fadeToggle(500);
});

$("#img").hover(
  function () {
    $(this).fadeTo(500, 0.5);
  }, // mouseenter
  function () {
    $(this).fadeTo(500, 1);
  } // mouseleave
);

// 3. slideDown, slideUp, slideToggle
$(".menu").click((e) => {
  let contents = $(e.target).next(); // 본인 기준 바로 다음
  //   if (contents.css("display") === "none") {
  //     contents.slideDown(100);
  //   } else {
  //     contents.slideUp(500);
  //   }
  // contents.slideToggle(500);

  $(".contents").slideUp();
  if (contents.css("display") === "none") {
    contents.slideDown();
  }
});
