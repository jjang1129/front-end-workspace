function result2() {
  const time1 = new Date("2025-01-01 00:00:00");
  const time2 = new Date();
  const time3 = time1 - time2; //time3 = 남은 모든 시간을 밀리새컨드로 표현
  const day = Math.floor(time3 / (1000 * 3600 * 24));
  console.log(day);
  const hour = Math.floor(time3 / (1000 * 3600)) % 24;
  console.log(hour);
  const min = Math.floor(time3 / (1000 * 60)) % 60;
  console.log(min);
  const sec = Math.floor(time3 / 1000) % 60;
  console.log(sec);

  result1.innerHTML = `${day}일 ${hour}시간 ${min}분 
  ${String(sec).padStart(2, "0")}초 입니다`;
} //String으로 바꾸고 padStart로 00을 채워 넣으면 03,02,01,00초 가능

result2();
setInterval(result2, 1000);

let answer = [];
answer[0] = 1;
console.log(answer);
