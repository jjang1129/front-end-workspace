const userIdspan = document.querySelector("#userId+span");
console.log(userIdspan);

userId.addEventListener("input", function () {
  const regExp = /^[ㄱ-힣]{2,}$/;
  const check = regExp.test(userId.value);
  if (check) {
    userIdspan.innerHTML = "합격";
    userIdspan.style.color = "green";
  } else {
    userIdspan.innerHTML = "불합격";
  }
});
