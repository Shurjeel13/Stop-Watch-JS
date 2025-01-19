
const hourContainer = document.querySelector(".hour")
const minuteContainer = document.querySelector(".minute")
const secondContainer = document.querySelector(".second")

let minute = 0
let hour = 0
let second = 0

function startWatch() {
    console.log("stop watch")
    setInterval(function () {
        if (second === 60) {
            second = 0;
            minute += 1;
            minuteContainer.innerHTML = minute

            return
        }
        second += 1;
        if (second < 10) {
            secondContainer.innerHTML = "0" + second
            return
        }

        secondContainer.innerHTML = second


    }, 100)
}
function stopWatch() {
    console.log("stop watch")
    setInterval(function () {
        if (minute === 60) {
            minute = 0;
            hour += 1;
            hourContainer.innerHTML = minute

            return
        }
        minute += 1;
        if (minute < 10) {
            minuteContainer.innerHTML = "0" + minute
            return
        }

        minuteContainer.innerHTML = minute


    }, 100)
}
function refreshWatch() {
    console.log("stop watch")
}


function hello (){
    if(false){
        console.log('hello');
        return
    }

    console.log('console after if');

}
