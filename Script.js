// JavaScript source code
//let secondsValue = document.getElementById("seconds").innerHTML;
let x;

function startCountDown() {
    let button = document.getElementById("button").innerHTML;
    let totalSeconds = document.getElementById("seconds").innerHTML;

    if(button==="START"){
        document.getElementById("button").innerHTML = "STOP";
        x = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(x);
            }
            else{
                totalSeconds--;
                document.getElementById("seconds").innerHTML = totalSeconds;
            }
        },1000);
    }
    if (button==="STOP"){
        clearInterval(x);
        document.getElementById("button").innerHTML = "START";
    }
}

