let hours = document.getElementById('hrs');
let minutes = document.getElementById('min');
let second = document.getElementById('sec');
let months = document.getElementById('month');
let days = document.getElementById('day');

let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let daysName = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];


setInterval(() => {
  
let currentTime = new Date();

hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
months.innerHTML = monthsName[currentTime.getMonth()];
days.innerHTML = daysName[currentTime.getDay()];


}, 1000);