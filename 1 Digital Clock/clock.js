// now we will be use the javascript for the logic of the code 
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function updateClock() {
    const currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}

updateClock();              // Page load hote hi time dikha do
setInterval(updateClock, 1000);

