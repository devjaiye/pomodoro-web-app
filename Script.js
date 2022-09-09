let intervalID;
function startStopCountDown(buttonText = document.getElementById("button").innerHTML) {
    if (buttonText === 'START') {
        let totalSeconds = document.getElementById("seconds").innerHTML;
        document.getElementById("button").innerHTML = "STOP";
        intervalID = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(intervalID);
            }
            else{
                totalSeconds--;
                document.getElementById("seconds").innerHTML = totalSeconds;
            }
        },1000);
    }
    if (buttonText === "STOP"){
        clearInterval(intervalID);
        document.getElementById("button").innerHTML = "START";
    }
}