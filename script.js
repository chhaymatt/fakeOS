/// DATE AND TIME MODULE
// Date and time buttons
const timeDisplay = document.getElementById("timeDisplay");
const hourButton = document.getElementById("hourButton");
const dayFullButton = document.getElementById("dayFullButton");
const monthFullButton = document.getElementById("monthFullButton");
const yearButton = document.getElementById("yearButton");
const secondsButton = document.getElementById("secondsButton");
const ampmButton = document.getElementById("ampmButton");

// Initial time settings on page load
let display12 = true;
let displayFullDay = true;
let displayFullMonth = true;
let displayYear = true;
let displaySeconds = true;
let displayAmpm = true;

// Toggle time menu dropdown after click
const closeTimeMenu = () => {
    menu[4].classList.toggle("hidden");
};

// Toggle 12 hour or 24 hour time setting
const toggleHour = () => {
    closeTimeMenu();
    display12 = !display12;
    let text = display12 ? "Show 24-hour time" : "Show 12-hour time";
    hourButton.innerText = text;
    ampmButton.classList.toggle("hidden");
};

// Toggle full day length setting
const toggleDayFull = () => {
    closeTimeMenu();
    displayFullDay= !displayFullDay;
    let text = displayFullDay ? "Hide full day" : "Show full day";
    dayFullButton.innerText = text;
};

// Toggle full month length setting
const toggleMonthFull = () => {
    closeTimeMenu();
    displayFullMonth = !displayFullMonth;
    let text = displayFullMonth ? "Hide full month" : "Show full month";
    monthFullButton.innerText = text;
};

// Toggle year setting
const toggleYear = () => {
    closeTimeMenu();
    displayYear = !displayYear;
    let text = displayYear ? "Hide year" : "Show year";
    yearButton.innerText = text;
};

// Toggle settings setting
const toggleSeconds = () => {
    closeTimeMenu();
    displaySeconds = !displaySeconds;
    let text = displaySeconds ? "Hide seconds" : "Show seconds";
    secondsButton.innerText = text;
};

// Toggle am/pm setting
const toggleAmpm = () => {
    closeTimeMenu();
    displayAmpm = !displayAmpm;
    let text = displayAmpm ? "Hide am/pm" : "Show am/pm";
    ampmButton.innerText = text;
};

// Time setting click to handler
hourButton.addEventListener("click",toggleHour);
dayFullButton.addEventListener("click",toggleDayFull);
monthFullButton.addEventListener("click",toggleMonthFull);
yearButton.addEventListener("click",toggleYear);
secondsButton.addEventListener("click",toggleSeconds);
ampmButton.addEventListener("click",toggleAmpm);

/**
 * This function displays the current date and time based on user settings
 * @param {boolean} display12           Show 12 hour time   e.g. 9:41 am
 * @param {boolean} displayFullDay      Show full day,      e.g. Tuesday
 * @param {boolean} displayFullMonth    Show full month,    e.g. October
 * @param {boolean} displayYear         Show year,          e.g. 2022
 * @param {boolean} displaySeconds      Show seconds        e.g. 9:41:59 am
 * @param {boolean} displayAmpm         Show am/pm          e.g. 9:41:59 am
 */
const time = (display12, displayFullDay, displayFullMonth, displayYear, displaySeconds) => {
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const d = new Date();
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    const dayNumber = d.getDate(); // th of month
    let dayFull = days[d.getDay()]; // Monday, Tuesday etc.
    let s = String(d.getSeconds()).padStart(2,0); // 00-59
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
    if (!displayYear) {
        year = "";
    };

    // Show 24 hour time
    if (display12) {
        ampm = h < 12 ? "am" : "pm";
        h = hours[h];
    } else {
        ampm = "";
    };

    // Hide am/pm
    if (!displayAmpm) {
        ampm = "";
    };

    // Hide seconds & write to HTML
    if (!displaySeconds) {
        timeDisplay.innerHTML = `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m} ${ampm}`;
    } else {
        timeDisplay.innerHTML = `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m}:${s} ${ampm}`;
    };
};

// Refresh HTML time display every 1000 miliseconds (1 second)
setInterval(() => time(display12, displayFullDay, displayFullMonth, displayYear, displaySeconds, displayAmpm), 1000);

/// MENU
// Menu buttons and dropdown groups
const appleButton = document.getElementById("appleButton");
const titleButton = document.getElementById("titleButton");
const fileButton = document.getElementById("fileButton");
const editButton = document.getElementById("editButton");
const menu = document.getElementsByClassName("dropdown__group");

// Menu handlers for each menu dropdown
const toggleAppleMenu = () => {
    menu[0].classList.toggle("hidden");
    menu[1].classList.add("hidden");
    menu[2].classList.add("hidden");
    menu[3].classList.add("hidden");
    menu[4].classList.add("hidden");

};
const toggleTitleMenu = () => {
    menu[1].classList.toggle("hidden");
    menu[0].classList.add("hidden");
    menu[2].classList.add("hidden");
    menu[3].classList.add("hidden");
    menu[4].classList.add("hidden");
};
const toggleFileMenu = () => {
    menu[2].classList.toggle("hidden");
    menu[0].classList.add("hidden");
    menu[1].classList.add("hidden");
    menu[3].classList.add("hidden");
    menu[4].classList.add("hidden");
};
const toggleEditMenu = () => {
    menu[3].classList.toggle("hidden");
    menu[0].classList.add("hidden");
    menu[1].classList.add("hidden");
    menu[2].classList.add("hidden");
    menu[4].classList.add("hidden");
};
const toggleTimeMenu = () => {
    menu[4].classList.toggle("hidden");
    menu[0].classList.add("hidden");
    menu[1].classList.add("hidden");
    menu[2].classList.add("hidden");
    menu[3].classList.add("hidden");

};

// Menu click to handler
appleButton.addEventListener("click",toggleAppleMenu);
titleButton.addEventListener("click",toggleTitleMenu);
fileButton.addEventListener("click",toggleFileMenu);
editButton.addEventListener("click",toggleEditMenu);
timeDisplay.addEventListener("click",toggleTimeMenu);

// About popup buttons and popup window
const pop = document.getElementsByClassName("popup");
const aboutPopupButton = document.getElementById("aboutPopupButton");
const closeAboutPopup = document.getElementById("closeAboutPopup");

// About popup handler
const toggleAboutPopup = () => {
    menu[0].classList.add("hidden");
    pop[0].classList.toggle("hidden");
}

// About click to handler
aboutPopupButton.addEventListener("click",toggleAboutPopup);
closeAboutPopup.addEventListener("click",toggleAboutPopup);

// // Shutdown popup buttons and popup window
// const shutdownPopupButton = document.getElementById("shutdownButton");
// const closeShutdownPopup = document.getElementById("closeShutdownPopup");

// // Shutdown popup handler
// const toggleShutdownPopup = () => {
//     menu[0].classList.add("hidden");
//     pop[1].classList.toggle("hidden");
// }

// // Shutdown click to handler
// // shutdownPopupButton.addEventListener("click",ShutDownProcess);
// closeShutdownPopup.addEventListener("click",toggleShutdownPopup);


///  APPS
// App specific open or close/minimise or fullscreen buttons, and window groups
const finderButton = document.getElementById("finderButton");
const closeFinderButton = document.getElementById("closeFinderButton");
const minimiseFinderButton = document.getElementById("minimiseFinderButton");

const weatherButton = document.getElementById("weatherButton");
const closeWeatherButton = document.getElementById("closeWeatherButton");
const minimiseWeatherButton = document.getElementById("minimiseWeatherButton");

const musicButton = document.getElementById("musicButton");
const closeMusicButton = document.getElementById("closeMusicButton");
const minimiseMusicButton = document.getElementById("minimiseMusicButton");

const fullscreenFinderButton = document.getElementById("fullscreenFinderButton");
const fullscreenWeatherButton = document.getElementById("fullscreenWeatherButton");
const fullscreenMusicButton = document.getElementById("fullscreenMusicButton");

const apps = document.getElementsByClassName("window__group");

// App handlers for opening or closing an app
const toggleFinderApp = () => {
    apps[0].classList.toggle("hidden")
    apps[0].classList.remove("fullscreen");
    // Set position to be left
    apps[0].style.top = 3.5 + "rem";
    apps[0].style.left = 1 + "rem";
    finderButton.classList.toggle("highlight");
    windowOnTopFinder();
};

const toggleWeatherApp = () => {
    apps[1].classList.toggle("hidden")
    apps[1].classList.remove("fullscreen");
    // Set position to be middle
    apps[1].style.top = 3.5 + "rem";
    apps[1].style.left = 30 + "rem";
    weatherButton.classList.toggle("highlight");
    windowOnTopWeather();
};

const toggleMusicApp = () => {
    apps[2].classList.toggle("hidden")
    apps[2].classList.remove("fullscreen");
    // Set position to be right
    apps[2].style.top = 3.5 + "rem";
    apps[2].style.left = 60 + "rem";
    musicButton.classList.toggle("highlight");
    windowOnTopMusic();
};

// App click to handler for open/minimise/closing an app
finderButton.addEventListener("click",toggleFinderApp);
closeFinderButton.addEventListener("click",toggleFinderApp);
minimiseFinderButton.addEventListener("click",toggleFinderApp);

weatherButton.addEventListener("click",toggleWeatherApp);
closeWeatherButton.addEventListener("click",toggleWeatherApp);
minimiseWeatherButton.addEventListener("click",toggleWeatherApp);

musicButton.addEventListener("click",toggleMusicApp);
closeMusicButton.addEventListener("click",toggleMusicApp);
minimiseMusicButton.addEventListener("click",toggleMusicApp);

// App handlers for fullscreening an app
const toggleFullscreenFinderApp = () => {
    apps[0].classList.toggle("fullscreen");
    apps[0].style.top = 3.5 + "rem";
    apps[0].style.left = 0 + "rem";
}

const toggleFullscreenWeatherApp = () => {
    apps[1].classList.toggle("fullscreen");
    apps[1].style.top = 3.5 + "rem";
    apps[1].style.left = 0 + "rem";
}

const toggleFullscreenMusicApp = () => {
    apps[2].classList.toggle("fullscreen");
    apps[2].style.top = 3.5 + "rem";
    apps[2].style.left = 0 + "rem";
}

// App click to handler for fullscreening an app
fullscreenFinderButton.addEventListener("click",toggleFullscreenFinderApp);
fullscreenWeatherButton.addEventListener("click",toggleFullscreenWeatherApp);
fullscreenMusicButton.addEventListener("click",toggleFullscreenMusicApp);

/// MAKE APP APPEAR ON TOP OF THE OTHER APPS & Change title in menu bar
// Finds the current Z index of each app
const findZIndex = () => {
    return [getComputedStyle(apps[0]).zIndex, getComputedStyle(apps[1]).zIndex, getComputedStyle(apps[2]).zIndex];
}

// Set the current app at the highest z index and reduce the z index of the other apps, Change title in menu bar
const windowOnTopFinder = () => {
    let index = findZIndex();
    titleButton.innerText = "Finder";
    if(index[0] < index[1] || index[0] < index[2]) {
        apps[0].style.zIndex = apps.length;
        apps[1].style.zIndex--;
        apps[2].style.zIndex--;
    }
}

const windowOnTopWeather = () => {
    let index = findZIndex();
    titleButton.innerText = "Weather";
    if (index[1] < index[0] || index[1] < index[2]) {
        apps[0].style.zIndex--;
        apps[1].style.zIndex = apps.length;
        apps[2].style.zIndex--;
    }
}

const windowOnTopMusic = () => {
    let index = findZIndex();
    titleButton.innerText = "Music";
    if (index[2] < index[0] || index[2] < index[1]) {
        apps[0].style.zIndex--;
        apps[1].style.zIndex--;
        apps[2].style.zIndex = apps.length;
    }
}

// App appear on top click to handlers
apps[0].addEventListener("click",windowOnTopFinder);
apps[1].addEventListener("click",windowOnTopWeather);
apps[2].addEventListener("click",windowOnTopMusic);


/// DRAGGABLE MODULE
// Source: https://www.w3schools.com/howto/howto_js_draggable.asp

// Draggable handler
const dragElement = (elmnt) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    const elementDrag = (e) => {
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

    const closeDragElement = () => {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
}

// App element to handler
dragElement(document.getElementById("finder"));
dragElement(document.getElementById("weather"));
dragElement(document.getElementById("music"));
