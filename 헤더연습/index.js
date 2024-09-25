// script.js

$(document).ready(function () {
  const $monthYear = $("#monthYear");
  const $datesContainer = $("#dates");
  const $prevMonthButton = $("#prevMonth");
  const $nextMonthButton = $("#nextMonth");
  let currentDate = new Date();

  // 날짜를 YYYY-MM-DD 형식의 문자열로 변환하는 함수
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    console.log(year - month - day);
    return `${year}-${month}-${day}`;
  }

  // 특정 날짜가 주어진 기간 내에 포함되는지 확인하는 함수
  function isDateInRange(startDate, endDate, checkDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateToCheck = new Date(checkDate);

    return dateToCheck >= start && dateToCheck <= end;
  }

  // 주어진 시작일과 종료일 사이의 모든 날짜를 반환하는 함수
  function getDatesInRange(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
      dates.push(formatDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  // 날짜 범위에 해당하는 날짜들을 하이라이트하는 함수
  function highlightDatesInRange(startDate, endDate) {
    const datesToHighlight = getDatesInRange(startDate, endDate);

    $(".date").each(function () {
      const $dateElem = $(this);
      const date = $dateElem.data("date");
      if (datesToHighlight.includes(date)) {
        $dateElem.addClass("highlight");
      }
    });
  }

  // 달력 렌더링 함수
  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDateOfMonth = lastDayOfMonth.getDate();

    $monthYear.text(
      `${currentDate.toLocaleString("default", { month: "long" })} ${year}`
    );

    $datesContainer.empty();

    for (let i = 0; i < firstDayOfWeek; i++) {
      $datesContainer.append('<div class="date empty"></div>');
    }

    for (let day = 1; day <= lastDateOfMonth; day++) {
      const dateStr = formatDate(new Date(year, month, day));
      $datesContainer.append(`
              <div class="date" data-date="${dateStr}">
                  ${day}
              </div>`);
    }

    // 예시 데이터: 하이라이트할 날짜 범위
    const startDate = "2024-08-20";
    const endDate = "2024-08-24";
    highlightDatesInRange(startDate, endDate);
  }

  // 이전/다음 달 버튼 클릭 이벤트
  $prevMonthButton.on("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  $nextMonthButton.on("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  // 페이지 로드 시 달력 렌더링
  renderCalendar();
});
