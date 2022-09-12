let intervalID;
function startStopCountDown(buttonText = document.getElementById("button").innerHTML) {
    var startTime = 180;
    var timeLeft = startTime;

    if (buttonText === 'START') {

        document.getElementById("button").innerHTML = "STOP";
        intervalID = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(intervalID);
                document.getElementById("button").innerHTML = "START";
            }
            else{
                timeLeft--;
                minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / 60);
                seconds = timeLeft % 60;
                document.getElementById("seconds").innerHTML = minutes + ":" + seconds;
            }
        },1000);
    }
    if (buttonText === "STOP"){
        clearInterval(intervalID);
        document.getElementById("button").innerHTML = "START";
    }
}