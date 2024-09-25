// 1. Filtering 메서드
// first : 선택된 요소들 중 첫 번째 요소 선택
$("h4").first().css("font-size", "4rem");
$("h4:first").css("color", "red");
$("h4").filter(":first").css("backgroundColor", "yellow");

// last : 선택된 요소들 중 마지막 번째 요소 선택

$("h4:last").css("font-size", "4rem");

// eq(n) : 선택된 요소들 중 인덱스 번호와 일치하는 요소 선택 (0부터 시작)
// 3번쨰 요소를 가져와서 "eq에 의해 선택되었습니다"로 텍스트 변경  (text)

$("h4:eq(2)").text("eq에 의해 선택 되었습니다");

// odd : 홀수번쨰 / even : 짝수번째 인덱스에 위치한 요소 선택
// 홀수번째 인덱스 요소를 가져와서 배경색 : hotpink, 글자색 : white

$("h4:odd").css({ color: "white", "background-color": "hotpink" });

// not (선택자) : 선택된 요소들 중 특정 요소와 일치하지 않는 요소 선택

$("h4:not(.test)").css({ backgroundColor: "orange", color: "white" });

// 2. Ancestor & Descendants 메서드
// parent : 선택된 요소의 바로 위 상위 요소 선택
// span 요소의 부모 요소에 글자색 : red, 테두리 : 2px solid
$("span").parent().css({ color: "red", border: "2px solid" });

// parents(['선택자']) : 선택된 요소의 모든 상위 요소를 선택하거나 , 매개변수가 있으면 매개변수와 일치하는 상위요소만 선택

// li 요소의 모든 상위 요소에 글자색 : blue
$(".wrap li").parents().css("color", "blue");

// li 요소의 상위 요소 중 div만 테두리 : 2px dashed tomato

$(".wrap li").parents("div").css({ border: "2px dashed tomato" });

// parentsUntil(['선택자']) : 선택된 요소의 모든 상위 요소를 선택하거나,
// 매개 변수가 있으면 선택된 요소부터 매개변수와 일치하는 요소까지의  상위 요소 선택

// span 요소부터 div 요소 이전까지 상위 요소에 배경색 : lavenderblush

$("span").parentsUntil("div").css("backgroundColor", "lavenderblush");

// children(['선택자']) : 선택된 요소의 모든 자식 요소를 선택하거나 매개변수가
// 있으면 매개변수와 일치하는 자식 요소만 선택
console.log($(".wrap").children());

// find('선택자'): 선택된 요소의 하위 요소 중 매개변수와 일치하는 모든 하위 요소 선택
console.log($(".wrap").find("span"));

let style1 = { color: "deeppink", border: "2px solid" };
let style2 = { color: "blue", border: "2px solid" };
let style3 = { color: "green", border: "2px solid" };
let style4 = { color: "purple", border: "2px solid" };
let style5 = { color: "orange", border: "2px solid" };

// 클래스가 wrap인 요소이
// 자식 요소들에 style 1 적용

$(".wrap").children().css(style1);

// 자식의 자식 요소들에 style 2 적용

$(".wrap").children().children().css(style2);

// 자식의 자식 요소중 ul태그에 style3
$(".wrap").children().children("ul").css(style3);

// 자식의 자식의 자식 요소중 li 태그에 style4

$(".wrap").children().children().children("li").css(style4);

// 모든 하위요소중 span 태그의 style5 적용
$(".wrap").find("span").css(style5);

// 3. Sidaways 메서드

// siblings(['선택자']) :  선택된 요소와 같은 레벨에 있는 모든 요소를 선택하거나
// 매개변수가 있으면 같은 레벨 요소중 매개변수와 일치하는 요소 선택

// h2 요소의 형제 요소들에 style3 적용

$(".wrap2 h2").siblings().css(style3);

// h2 요소의 형제 요소 중 p 요소에 style2 적용

$(".wrap2 h2").siblings("p").css(style2);

// next : 선택된 요소와 같은 레벨 요소중 다음 한 개 요소 선택
// h2 요소의 다음 형제 요소에 style1 적용

$(".wrap2 h2").next().css(style1);

// nextAll ; 선택된 요소와 같은 레벨 요소중 다음의 모든 요소 선택
// h2 요소의 다음에 오는 모든 형제 요소에 배경색 pink
$(".wrap2 h2").nextAll().css("backgroundColor", "pink");

// nextUntil(['선택자']) : 선택된 요소와 같은 레벨 요소 중 다음의 모든 요소를
// 선택하거나, 매개변수가 있으면 같은 레벨의 다음 요소 중 매개변수와 일치하는 요소까지 선택

// h2 요소 이후부터 p 요소 이전에 모든 요소에 테두리 : 2px dashed

$(".wrap2 h2").nextUntil("p").css("border", "2px dashed");

// prev : 선택된 요소와 같은 레벨 요소 중 이전의 한 개 요소 선택
// h2 요소의 이전 형제 요소에 style5 적용
$(".wrap2 h2").prev().css(style5);

// prevAll : 선택된 요소와 같은 레벨 요소 중 이전의 모든 요소 선택
// h2 요소의 이전에 오는 모든 형제 요소에 배경색 : moccasin

$(".wrap2 h2").prevAll().css("backgroundColor", "moccasin");

//prevUntil(['선택자']) : 선택된 요소와 같은 레벨 요소 중 이전의 모든 요소를 선택하거나
// 매개변수가 있으면 같은 레벨의 이전요소 중 매개변수와 일치하는 요소 까지 선택
// h2 요소 이전부터 p 요소 이후까지의 모든 형제 요소에 글자크기 : 2rem

$(".wrap2 h2").prevUntil("p").css("font-size", "2rem");
