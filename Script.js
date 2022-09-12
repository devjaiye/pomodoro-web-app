let intervalID;
function startStopCountDown(buttonText = document.getElementById("button").innerHTML) {
    var totalTime = 1500;
    if (buttonText === 'START') {

        document.getElementById("button").innerHTML = "STOP";
        intervalID = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(intervalID);
                document.getElementById("button").innerHTML = "START";
            }
            else{
                totalTime--;
                var minutes = Math.floor((totalTime % (1000 * 60 * 60)) / 60);
                if (minutes < 10){
                    minutes = "0" + minutes;
                }
                var seconds = totalTime % 60;
                if (seconds < 10){
                    seconds = "0" + seconds;
                }
                document.getElementById("timer").innerHTML = minutes + ":" + seconds;
            }
        },1000);
    }
    if (buttonText === "STOP"){
        clearInterval(intervalID);
        document.getElementById("button").innerHTML = "START";
    }
}