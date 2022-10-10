// MENU BAR
const appleButton = document.getElementById("appleButton");
const titleButton = document.getElementById("titleButton");
const fileButton = document.getElementById("fileButton");
const editButton = document.getElementById("editButton");

const menu = document.getElementsByClassName("dropdown__group");

// const hideMenu = () => {
//     menu[0].classList.add("hidden");
//     menu[1].classList.add("hidden");
//     menu[2].classList.add("hidden");
//     menu[3].classList.add("hidden");

// }

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


appleButton.addEventListener("click",toggleAppleMenu);
titleButton.addEventListener("click",toggleTitleMenu);
fileButton.addEventListener("click",toggleFileMenu);
editButton.addEventListener("click",toggleEditMenu);

///  APPS
const finderButton = document.getElementById("finderButton");
const weatherButton = document.getElementById("weatherButton");
const musicButton = document.getElementById("musicButton");
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
weatherButton.addEventListener("click",toggleWeatherApp);
musicButton.addEventListener("click",toggleMusicApp);