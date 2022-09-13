let intervalID;
let totalTime = document.getElementById("timer").innerHTML.substring(0, 2) * 60;
var minutes;
var seconds;
function startStopCountDown(buttonText = document.getElementById("button").innerHTML) {
    if (buttonText === 'START') {
        playWorkSound(totalTime);
        document.getElementById("button").innerHTML = "STOP";
        countDown();
    }
    if (buttonText === "STOP"){
        clearInterval(intervalID);
        document.getElementById("button").innerHTML = "START";
    }
}
function playWorkSound(timeLeft){
    if(timeLeft === 1500){
        var work = new Audio('resources/work.mp3');
        work.play();
    }
}

function startBreakCountDown(){
    document.getElementById("timer").innerHTML = "05:00";
    totalTime = 300;
    countDown();
}

function countDown(){
    intervalID = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(intervalID);
            //document.getElementById("button").innerHTML = "START";
            startBreakCountDown();
        }
        totalTime--;
        minutes = Math.floor((totalTime % (1000 * 60 * 60)) / 60);
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        seconds = totalTime % 60;
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    }, 1000);
}