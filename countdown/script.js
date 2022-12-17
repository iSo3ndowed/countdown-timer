const daysEl = document.getElementById('days-left')
const hoursEl = document.getElementById('hours-left')
const minutesEl = document.getElementById('minutes-left')
const secondsEl = document.getElementById('seconds-left')

const handingOverDate = '18 December 2022';

function countDown(){
    const NewYear = new Date(handingOverDate);
    const currentDate = new Date();

    const totalSeconds = (NewYear - currentDate) / 1000;

    const days = Math.floor(totalSeconds /3600 /24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countDown();
setInterval(countDown, 1000)