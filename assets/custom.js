setInterval(function time() {
  var d = new Date();
  var d1 = new Date();
  d.setHours(d1.getHours() + 10);
  var hours = 23 - 22;
  var min = 59 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  var sec = 59 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  $(".timer").html(hours + "hrs " + min + "m " + sec + "s");
}, 1000);

var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var currentDateNew = new Date(new Date().getTime() + 120 * 60 * 60 * 1000);
var day = currentDateNew.getDate();
let dayN = "th";
switch (day) {
  case 1:
    dayN = "st";
    break;
  case 2:
    dayN = "nd";
    break;
  case 3:
    dayN = "rd";
    break;
  default:
    dayN = "th";
}
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
$(".date-product").html(
  days[currentDateNew.getDay()] +
    ", " +
    day +
    dayN +
    " " +
    monthNames[currentDateNew.getMonth()]
);

