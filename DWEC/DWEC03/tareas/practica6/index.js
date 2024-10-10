let timer;
let seconds = 0;
let isRunning = false;
let stepContainer = document.getElementsByTagName("ul")[0];
let currentStep = 1;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            document.getElementById('time').textContent = formatTime(seconds);
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    stepContainer.innerHTML = "";
    seconds = 0;
    document.getElementById('time').textContent = '00:00:00';
    startTimer();
}

function stepTimer(){
    let step = document.createElement("li")
    step.innerHTML = `<li><span class='steepTitle'>Vuelta ${currentStep++}: </span>${formatTime(seconds)}</li>`
    stepContainer.append(step);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}