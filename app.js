function ageCalculate() {
  let inputDate = document.getElementById("day").value;
  let inputMonth = document.getElementById("month").value;
  let inputYear = document.getElementById("year").value;

  if (inputDate == "" || inputMonth == "" || inputYear == "") {
    alert("Please enter your date of birth");
    return;
  }

  let presentDate = new Date().getDate();
  let presentMonth = new Date().getMonth() + 1;
  let presentYear = new Date().getFullYear();

  if (inputYear > presentYear) {
    alert("Birth year should be less than current year");
    return;
  }

  let year, month, day;

  year = presentYear - inputYear;

  if (presentMonth >= inputMonth) {
    month = presentMonth - inputMonth;
  } else {
    year--;
    month = presentMonth + 12 - inputMonth;
  }

  if (presentDate >= inputDate) {
    day = presentDate - inputDate;
  } else {
    month--;
    day = presentDate + getDaysInMonth(inputMonth, inputYear) - inputDate;
  }

  if (month < 0) {
    month = month + 12;
    year--;
  }

  //   console.log(d1, m1, y1);
  //   console.log(d2, m2, y2);

  //   console.log(getDaysInMonth(m1, y1));
  //   console.log(`year: ${year}, month: ${month}, day: ${day}`);

  const result = document.getElementById("age_result");
  result.innerHTML = `
    <h2><span id="year_diff">${year}</span> Years</h2>
    <h2><span id="month_diff">${month}</span> Months</h2>
    <h2><span id="day_diff">${day}</span> Days</h2>`;
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
