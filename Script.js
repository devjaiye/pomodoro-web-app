// JavaScript source code
//let secondsValue = document.getElementById("seconds").innerHTML;

function startCountDown() {
    let button = document.getElementById("button").innerHTML;
    let totalSeconds = 5;

    if(button=="START"){
        document.getElementById("button").innerHTML = "STOP";
        const x = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(x);
            }
            else{
                totalSeconds--;
                document.getElementById("seconds").innerHTML = totalSeconds;
            }

        }, 1000);
    }
    if (button=="STOP"){
        document.getElementById("button").innerHTML = "START";
    }
}

let totalSeconds = document.getElementById("seconds").innerHTML;
let tempSeconds = totalSeconds;

