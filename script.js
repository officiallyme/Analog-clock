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
}, 1000);