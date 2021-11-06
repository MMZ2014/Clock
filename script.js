const hourEl = document.querySelector(".hour");
const mintueEl = document.querySelector(".mintue");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
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

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const mintues = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? `PM` : `ÀM`;

  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  mintueEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    mintues,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    mintues < 10 ? `0${mintues}` : mintues
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
setTime();

setInterval(setTime, 1000);
