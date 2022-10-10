// DATE AND TIME
let timeDisplay = document.getElementById("timeDisplay");

function time() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const dayNumber = d.getDate(); // th of month
    const dayFull = days[d.getDay()]; // Monday, Tuesday etc.
    const s = String(d.getSeconds()).padStart(2,0); // 0-59
    const m = String(d.getMinutes()).padStart(2,0); // 0-59
    const h = String(d.getHours()).padStart(2,0); // 0-23
    console.log(dayNumber);
    timeDisplay.innerHTML = `${dayFull} ${dayNumber} ${month} ${year} ${hours[h]}:${m}:${s}`;
}

setInterval(time, 1000); // Refresh time every 1000 miliseconds (1 second)

// MENU BAR
const appleButton = document.getElementById("appleButton");
const titleButton = document.getElementById("titleButton");
const fileButton = document.getElementById("fileButton");
const editButton = document.getElementById("editButton");

const menu = document.getElementsByClassName("dropdown__group");

// MENU HANDLERS
const toggleAppleMenu = () => {
    menu[0].classList.toggle("hidden");
    appleButton.classList.toggle("highlight");
};
const toggleTitleMenu = () => {
    menu[1].classList.toggle("hidden");
    titleButton.classList.toggle("highlight");
};
const toggleFileMenu = () => {
    menu[2].classList.toggle("hidden");
    fileButton.classList.toggle("highlight");
};
const toggleEditMenu = () => {
    menu[3].classList.toggle("hidden");
    editButton.classList.toggle("highlight");
};


// MENU CLICK
appleButton.addEventListener("click",toggleAppleMenu);
titleButton.addEventListener("click",toggleTitleMenu);
fileButton.addEventListener("click",toggleFileMenu);
editButton.addEventListener("click",toggleEditMenu);

///  APPS
const finderButton = document.getElementById("finderButton");
const closeFinderButton = document.getElementById("closeFinderButton");

const weatherButton = document.getElementById("weatherButton");
const closeWeatherButton = document.getElementById("closeWeatherButton");

const musicButton = document.getElementById("musicButton");
const closeMusicButton = document.getElementById("closeMusicButton");

const app = document.getElementsByClassName("window__group");


const toggleFinderApp = () => {
    app[0].classList.toggle("hidden")
    finderButton.classList.toggle("highlight");
};

const toggleWeatherApp = () => {
    app[1].classList.toggle("hidden")
    weatherButton.classList.toggle("highlight");
};

const toggleMusicApp = () => {
    app[2].classList.toggle("hidden")
    musicButton.classList.toggle("highlight");
};

finderButton.addEventListener("click",toggleFinderApp);
closeFinderButton.addEventListener("click",toggleFinderApp);

weatherButton.addEventListener("click",toggleWeatherApp);
closeWeatherButton.addEventListener("click",toggleWeatherApp);

musicButton.addEventListener("click",toggleMusicApp);
closeMusicButton.addEventListener("click",toggleMusicApp);

