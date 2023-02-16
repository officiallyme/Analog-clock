const secHand = document.querySelector(".circle1");
const minHand = document.querySelector(".circle2");
const hrHand = document.querySelector(".circle3");
setInterval(() => {
  const day = new Date();
  let ss = day.getSeconds() * 6;
  let mm = day.getMinutes() * 6;
  let hh = day.getHours() * 30;

  secHand.style.transform = `rotateZ(${ss}deg)`;
  minHand.style.transform = `rotateZ(${mm}deg)`;
  hrHand.style.transform = `rotateZ(${hh + mm / 12}deg)`;

  //------------------------DIGITAL----------------------
  const hr = document.querySelector(".hour");
  const min = document.querySelector(".min");
  const ampm = document.querySelector(".ampm");

  let hrs = day.getHours();
  let mins = day.getMinutes();

  ampm.innerText = hrs >= 12 ? "PM" : "AM";
  hrs = hrs > 12 ? hrs - 12 : hrs;
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;

  hr.innerText = hrs;
  min.innerText = mins;
}, 1000);
