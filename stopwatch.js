let startTime, updatedTime, difference, tInterval, running = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const display = document.getElementById('display');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00.000";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));
    
    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + 
                                            (minutes < 10 ? "0" + minutes : minutes) + ":" + 
                                            (seconds < 10 ? "0" + seconds : seconds) + "." + 
                                            (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds);
}


