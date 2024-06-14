const regExp = /(^[a-z][a-z0-9]{3,11})$/;
id.addEventListener("input", function () {});

oki.addEventListener("click", function () {
  if (regExp.test(id.value)) {
    alert("정상입력!");
  } else {
    alert("잘못 입력!");
  }
});

const id1 = document.querySelector("#input-id");

id.addEventListener("input", function () {
  id1.innerHTML =
    "첫글자는 반드시 영문자로, 그리고 영문자,숫자,포함하여 총4~12자로 입력하시오.";
  id1.style.color = "red";
});
pass.addEventListener("input", function () {
  pass1.innerHTML = "영문자,숫자,특수문자 포함하여 총 8~15자로 입력하시오.";
  pass1.style.color = "red";
});

check.addEventListener("input", function () {
  passcheck.innerHTML = "위의 비밀먼호와 일치하게 입력하시오";
  passcheck.style.color = "red";
});

name1.addEventListener("input", function () {
  name2.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오";
  name2.style.color = "red";
});
email.addEventListener("input", function () {
  emailcheck.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  emailcheck.style.color = "red";
});
