// DATE AND TIME
const timeDisplay = document.getElementById("timeDisplay");
// let this12 = true;
const time = (display12 = true, displayFullDay = false, displayFullMonth = false, displayYear = true) => {
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    const d = new Date();
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    const dayNumber = d.getDate(); // th of month
    let dayFull = days[d.getDay()]; // Monday, Tuesday etc.
    const s = String(d.getSeconds()).padStart(2,0); // 00-59
    const m = String(d.getMinutes()).padStart(2,0); // 00-59
    let h = String(d.getHours()); // 0-23
    let ampm; // am or pm

    // Shorten full day - e.g. Tue
    if (!displayFullDay) {
        dayFull = dayFull.slice(0,3);
    };

    // Shorten full month - e.g. Oct
    if (!displayFullMonth) {
        month = month.slice(0,3);
    };

    // Hide year
    if(!displayYear) {
        year = "";
    }

    // Show 24 houur time
    if(display12) {
        ampm = h < 12 ? "am" : "pm";
        h = hours[h]
        
    } else {
        ampm = "";
    }

    timeDisplay.innerHTML = `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m}:${s} ${ampm}`;
 
};

setInterval(() => time(), 1000); // Refresh time every 1000 miliseconds (1 second)

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
const toggleTimeMenu = () => {
    menu[4].classList.toggle("hidden");
    timeDisplay.classList.toggle("highlight");
};


// MENU CLICK
appleButton.addEventListener("click",toggleAppleMenu);
titleButton.addEventListener("click",toggleTitleMenu);
fileButton.addEventListener("click",toggleFileMenu);
editButton.addEventListener("click",toggleEditMenu);
timeDisplay.addEventListener("click",toggleTimeMenu);


// TIME MENU & CLICKS
const hourButton = document.getElementById("hourButton");
// hourButton.addEventListener("click",toggleHour);

///  APPS
const finderButton = document.getElementById("finderButton");
const closeFinderButton = document.getElementById("closeFinderButton");
const minimiseFinderButton = document.getElementById("minimiseFinderButton");

const weatherButton = document.getElementById("weatherButton");
const closeWeatherButton = document.getElementById("closeWeatherButton");
const minimiseWeatherButton = document.getElementById("minimiseWeatherButton")

const musicButton = document.getElementById("musicButton");
const closeMusicButton = document.getElementById("closeMusicButton");
const minimiseMusicButton = document.getElementById("minimiseMusicButton");

const app = document.getElementsByClassName("window__group");

// Open and close apps
const toggleFinderApp = () => {
    app[0].classList.toggle("hidden")
    app[0].classList.remove("fullscreen");
    // Set position to be left
    app[0].style.top = 3.5 + "rem";
    app[0].style.left = 1 + "rem";
    finderButton.classList.toggle("highlight");
};

const toggleWeatherApp = () => {
    app[1].classList.toggle("hidden")
    app[1].classList.remove("fullscreen");
    // Set position to be middle
    app[1].style.top = 3.5 + "rem";
    app[1].style.left = 30 + "rem";
    weatherButton.classList.toggle("highlight");
};

const toggleMusicApp = () => {
    app[2].classList.toggle("hidden")
    app[2].classList.remove("fullscreen");
    // Set position to be right
    app[2].style.top = 3.5 + "rem";
    app[2].style.left = 60 + "rem";
    musicButton.classList.toggle("highlight");
};

finderButton.addEventListener("click",toggleFinderApp);
closeFinderButton.addEventListener("click",toggleFinderApp);
minimiseFinderButton.addEventListener("click",toggleFinderApp);

weatherButton.addEventListener("click",toggleWeatherApp);
closeWeatherButton.addEventListener("click",toggleWeatherApp);
minimiseWeatherButton.addEventListener("click",toggleWeatherApp);

musicButton.addEventListener("click",toggleMusicApp);
closeMusicButton.addEventListener("click",toggleMusicApp);
minimiseMusicButton.addEventListener("click",toggleMusicApp);

// Fullscreen apps
const toggleFullscreenFinderApp = () => {
    app[0].classList.toggle("fullscreen");
    // Set position to be top left corner
    app[0].style.top = 3.5 + "rem";
    app[0].style.left = 0 + "rem";
}

const toggleFullscreenWeatherApp = () => {
    app[1].classList.toggle("fullscreen");
    // Set position to be top left corner
    app[1].style.top = 3.5 + "rem";
    app[1].style.left = 0 + "rem";
}

const toggleFullscreenMusicApp = () => {
    app[2].classList.toggle("fullscreen");
    // Set position to be top left corner
    app[2].style.top = 3.5 + "rem";
    app[2].style.left = 0 + "rem";
}


const fullscreenFinderButton = document.getElementById("fullscreenFinderButton");
const fullscreenWeatherButton = document.getElementById("fullscreenWeatherButton");
const fullscreenMusicButton = document.getElementById("fullscreenMusicButton");
fullscreenFinderButton.addEventListener("click",toggleFullscreenFinderApp);
fullscreenWeatherButton.addEventListener("click",toggleFullscreenWeatherApp);
fullscreenMusicButton.addEventListener("click",toggleFullscreenMusicApp);


// Source: https://www.w3schools.com/howto/howto_js_draggable.asp
// Make the DIV element draggable:
dragElement(document.getElementById("finder"));
dragElement(document.getElementById("weather"));
dragElement(document.getElementById("music"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

