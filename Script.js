// JavaScript source code
//let secondsValue = document.getElementById("seconds").innerHTML;

/*let buttonText = "START";*/

function startCountDown() {
    let button = document.getElementById("button").innerHTML;
    if(button=="START"){
        document.getElementById("button").innerHTML = "STOP";
        //button = "STOP";
    }
    if (button=="STOP"){
        document.getElementById("button").innerHTML = "START";
        //button = "START";
    }
    /*let x = setInterval(function () {
        while (secondsValue > 0) {
            secondsValue = secondsValue - 1;
        }
    }, 1000);*/
}