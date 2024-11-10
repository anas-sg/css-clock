var DARK_MODE = true;
const ELEMS = ["html", "span", ".clock", ".hand", "#time"];

const displayDate = () => {
    let date = new Date();
    const format = new Intl.DateTimeFormat("en-UK", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let dateElem = document.querySelector('#date');
    dateElem.textContent = format.format(date);
};

const displayDigitalTime = () => {
    let date = new Date();
    const format = new Intl.DateTimeFormat("en-UK", {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
    let timeElem = document.querySelector('#time');
    timeElem.textContent = format.format(date);
};

const displaySeconds = () => {
    const secHand = document.querySelector('.second-hand');
    
    let date = new Date();
    let seconds = date.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;

    secHand.style.transform = `rotateZ(${secondsDegrees}deg)`;
};

const displayMinutes = () => {
    const minsHand = document.querySelector('.min-hand');
    
    let date = new Date();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let minsDegrees = ((mins / 60) * 360) + ((secs / 60) * 6) + 90 ;
    
    minsHand.style.transform = `rotateZ(${minsDegrees}deg)`;
};

const displayHours = () => {
    const hourHand = document.querySelector('.hour-hand');
    
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    
    hourHand.style.transform = `rotateZ(${hourDegrees}deg)`;
};

const callAllFunctions = () => {
    displayDate();
    displayDigitalTime();
    displaySeconds();
    displayMinutes();
    displayHours();
};

const toggleMode = (test) => {
    if (test === undefined) {
        var currentMode = DARK_MODE ? "dark" : "light";
        var newMode = DARK_MODE ? "light" : "dark";
        DARK_MODE = !DARK_MODE;
    } else if (test == "dark") {
        var currentMode = "light";
        var newMode = "dark";
        DARK_MODE = true;
    } else {
        var currentMode = "dark";
        var newMode = "light";
        DARK_MODE = false;
    } 
    
    for (let i in ELEMS) {
        var list = document.querySelectorAll(ELEMS[i]);
        for (var j = 0; j < list.length; j++) {
            list[j].classList.remove(currentMode);
            list[j].classList.add(newMode);
        }
    }
    
};

document.addEventListener('keydown', (event) => {
    if (event.key == 'x') {
        toggleMode();
    }
});
window.onclick = function(e){ 
    document.querySelector("body").requestFullscreen();
}
setInterval(callAllFunctions, 1000);
callAllFunctions();
