
// setInterval(countDown, 1000)

setInterval(countDown =() => {


const finalDate = new Date('April 4,2024 00:00:00').getTime();
const now = new Date ().getTime();

const timeDifference = finalDate - now;

const seconds = 1000;
const minutes =  seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

// console.log (days)

let daysTime = Math.floor(timeDifference/days);
// console.log(daysTime)
let daysHours = Math.floor((timeDifference % days)/hours);
// console.log(daysHours);
let daysMinutes = Math.floor((timeDifference % hours)/minutes);
console.log(daysMinutes);
let daysSeconds = Math.floor((timeDifference % minutes)/seconds);
console.log(daysSeconds);

document.getElementById('days').innerHTML = daysTime;
document.getElementById('hours').innerHTML = daysHours;
document.getElementById('minutes').innerHTML = daysMinutes;
document.getElementById('seconds').innerHTML = daysSeconds;
 }
 , 1000) 


