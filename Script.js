let intervalID;
function startCountDown(buttonText = document.getElementById("button").innerHTML) {
    let x;
    if (buttonText === 'START') {
        let totalSeconds = document.getElementById("seconds").innerHTML;
        document.getElementById("button").innerHTML = "STOP";
        intervalID = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(x);
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