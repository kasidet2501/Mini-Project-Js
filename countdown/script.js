const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');
const button = document.getElementById('button');
const text_date = document.getElementById('text-date');



let dateCount = '25 dec 2023';

function countdown(){
    const newDate = new Date(dateCount);
    const currentDate = new Date();
    
    const totalSec = (newDate - currentDate) / 1000;
    console.log(totalSec);

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor(totalSec % 60);

    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = sec;
}

countdown();

// เรียกให้ใช้ function นี้ทุกๆ 1 วินาที
setInterval(countdown,1000);

button.addEventListener('click',() => {
    const date = document.getElementById('date');
    dateCount = date.value;
    text_date.innerHTML = date.value;
    document.getElementById("date").value = "";
    
    countdown();

});