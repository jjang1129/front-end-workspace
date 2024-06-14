/*
사용자가 입력을 했을 때 
해당 조건이 틀릴 경우 빨간색으로 표시
해당 조건이 맞는 경우 초록색 표시와 함께 "OK!"



*/

const useId = document.querySelector("#userId");
const userIdspan = document.querySelector("#userId+span");

useId.addEventListener("input", function () {
  // 첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(useId.value);
  console.log(check);
  if (check) {
    userIdspan.style.color = "green";
    userIdspan.innerHTML = "OK!";
  } else {
    userIdspan.style.color = "red";
    userIdspan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});
const userPwdspan = document.querySelector("#userPwd+span");
const userPwd = document.querySelector("#userPwd");

userPwd.addEventListener("input", function () {
  //영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.
  // [!-~a-zA-Z0-9]{8,15}

  const regExp = /^[!-~a-zA-z0-9]{8,15}$/;
  const check = regExp.test(userPwd.value);
  console.log(check);
  if (check) {
    userPwdspan.style.color = "green";
    userPwdspan.innerHTML = "OK!";
  } else {
    userPwdspan.style.color = "red";
    userPwdspan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckspan = document.querySelector("#userPwdCheck+span");

userPwdCheck.addEventListener("input", function () {
  //위의 비밀번호와 일치하게 입력하시오.

  if (userPwdCheck.value === userPwd.value) {
    userPwdCheckspan.style.color = "green";
    userPwdCheckspan.innerHTML = "OK!";
  } else {
    userPwdCheckspan.style.color = "red";
    userPwdCheckspan.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});

const userName = document.querySelector("#userName");
const userNamespan = document.querySelector("#userName+span");

userName.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(userName.value);

  if (check) {
    userNamespan.style.color = "green";
    userNamespan.innerHTML = "OK!";
  } else {
    userNamespan.style.color = "red";
    userNamespan.innerHTML =
      "한글로만 이루어져야되며 2글자 이상으로 입력하시오. ";
  }
});

const email = document.querySelector("#email");
const emailspan = document.querySelector("#email+span");
const reset1 = document.querySelector("#reset1");

email.addEventListener("input", function () {
  const regExp = /^\w{1,}@\w{1,}$/;
  const check = regExp.test(email.value);

  if (check) {
    emailspan.style.color = "green";
    emailspan.innerHTML = "OK!";
    reset1.removeAttribute("disabled");
  } else {
    emailspan.style.color = "red";
    emailspan.innerHTML = "이메일 형식에 맞춰서 입력하시오. ";
  }
});

// 이메일 형식에 맞춰서
// abc123@gmail.com
// ->(영어나숫자문자아무거나 길이도 상관없이 : +)@(앞이랑 마찬가지)

// 모든 input 값이 조건을 만족했을때
// 버튼을 활성화 시킨다

const all = document.querySelectorAll("span");
console.log(userPwdspan.innerHTML.length);

if (userPwdspan.innerHTML === `OK!`) {
  console.log(2);
}
