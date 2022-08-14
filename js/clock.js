const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    //console.log(date);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const strTime = `${hours}:${minutes}:${seconds}`;
    clock.innerText = strTime;
}

getClock();
setInterval(getClock, 1000);