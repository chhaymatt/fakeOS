/// DATE AND TIME MODULE
// Date and time buttons
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

// Toggle 12 hour or 24 hour time setting
const toggleHour = () => {
	display12 = !display12;
	hourButton.innerText = display12 ? "Show 24-hour time" : "Show 12-hour time";
	ampmButton.classList.toggle("hidden");
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hide(timeMenu);
};

// Toggle full day length setting
const toggleDayFull = () => {
	displayFullDay = !displayFullDay;
	dayFullButton.innerText = displayFullDay ? "Hide full day" : "Show full day";
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hide(timeMenu);
};

// Toggle full month length setting
const toggleMonthFull = () => {
	displayFullMonth = !displayFullMonth;
	monthFullButton.innerText = displayFullMonth ? "Hide full month" : "Show full month";
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hide(timeMenu);
};

// Toggle year setting
const toggleYear = () => {
	displayYear = !displayYear;
	yearButton.innerText = displayYear ? "Hide year" : "Show year";
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hide(timeMenu);
};

// Toggle settings setting
const toggleSeconds = () => {
	displaySeconds = !displaySeconds;
	secondsButton.innerText = displaySeconds ? "Hide seconds" : "Show seconds";
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hide(timeMenu);
};

// Toggle am/pm setting
const toggleAmpm = () => {
	displayAmpm = !displayAmpm;
	ampmButton.innerText = displayAmpm ? "Hide am/pm" : "Show am/pm";
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hide(timeMenu);
};

// Time setting click to handler
hourButton.addEventListener("click", toggleHour);
dayFullButton.addEventListener("click", toggleDayFull);
monthFullButton.addEventListener("click", toggleMonthFull);
yearButton.addEventListener("click", toggleYear);
secondsButton.addEventListener("click", toggleSeconds);
ampmButton.addEventListener("click", toggleAmpm);

/**
 * This function displays the current date and time based on user settings
 * @param {boolean} display12           Show 12 hour time   e.g. 9:41 am
 * @param {boolean} displayFullDay      Show full day,      e.g. Tuesday
 * @param {boolean} displayFullMonth    Show full month,    e.g. October
 * @param {boolean} displayYear         Show year,          e.g. 2022
 * @param {boolean} displaySeconds      Show seconds        e.g. 9:41:59 am
 * @param {boolean} displayAmpm         Show am/pm          e.g. 9:41:59 am
 */
const time = (
	display12,
	displayFullDay,
	displayFullMonth,
	displayYear,
	displaySeconds
) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const hours = [
		"12",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
	];

	const d = new Date();
	let year = d.getFullYear();
	let month = months[d.getMonth()];
	const dayNumber = d.getDate(); // th of month
	let dayFull = days[d.getDay()]; // Monday, Tuesday etc.
	let s = String(d.getSeconds()).padStart(2, 0); // 00-59
	const m = String(d.getMinutes()).padStart(2, 0); // 00-59
	let h = String(d.getHours()); // 0-23
	let ampm; // am or pm

	// Shorten full day - e.g. Tue
	if (!displayFullDay) {
		dayFull = dayFull.slice(0, 3);
	}

	// Shorten full month - e.g. Oct
	if (!displayFullMonth) {
		month = month.slice(0, 3);
	}

	// Hide year
	if (!displayYear) {
		year = "";
	}

	// Show 24 hour time
	if (display12) {
		ampm = h < 12 ? "am" : "pm";
		h = hours[h];
	} else {
		ampm = "";
	}

	// Hide am/pm
	if (!displayAmpm) {
		ampm = "";
	}

	// Hide or display seconds & write to HTML
	if (!displaySeconds) {
		timeDisplay.innerHTML = `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m} ${ampm}`;
	} else {
		timeDisplay.innerHTML = `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m}:${s} ${ampm}`;
	}
};

// Refresh HTML time display every 1000 miliseconds (1 second)
setInterval(
	() =>
		time(
			display12,
			displayFullDay,
			displayFullMonth,
			displayYear,
			displaySeconds,
			displayAmpm
		),
	1000
);

/// KEY ELEMENTS
const menus = document.querySelector(".menu");
const dropdowns = document.querySelector(".dropdown");
const main = document.querySelector(".main");
const dock = document.querySelector(".dock");
const body = document.querySelector("body");

/// MENU
// Menu buttons
const appleButton = document.getElementById("appleButton");
const titleButton = document.getElementById("titleButton");
const fileButton = document.getElementById("fileButton");
const editButton = document.getElementById("editButton");
const timeDisplay = document.getElementById("timeDisplay");

// Dropdown groups
const appleMenu = document.getElementById("appleMenu");
const titleMenu = document.getElementById("titleMenu");
const fileMenu = document.getElementById("fileMenu");
const editMenu = document.getElementById("editMenu");
const timeMenu = document.getElementById("timeMenu");

/**
 * toggleMenu displays a selected menu based on user click and hides the other menus
 * @param {*} menuToToggle Display the required menu e.g. appleMenu
 * @param  {...any} menusToHide Spread operator captures the remaining menus and hides them e.g. fileMenu, titleMenu, etc.
 */
const toggleMenu = (menuToToggle, ...menusToHide) => {
	menuToToggle.classList.toggle("hidden");
	menusToHide.forEach((menu) => menu.classList.add("hidden"));
};

/**
 * Hides elements
 * @param  {...any} elementsToHide
 */
const hide = (...elementsToHide) => {
	elementsToHide.forEach((element) => element.classList.add("hidden"));
};

// Menu click to handler
appleButton.addEventListener("click", () => {
	toggleMenu(appleMenu, fileMenu, titleMenu, editMenu, timeMenu);
});
titleButton.addEventListener("click", () => {
	toggleMenu(titleMenu, appleMenu, fileMenu, editMenu, timeMenu);
});
fileButton.addEventListener("click", () => {
	toggleMenu(fileMenu, appleMenu, editMenu, titleMenu, timeMenu);
});
editButton.addEventListener("click", () => {
	toggleMenu(editMenu, titleMenu, fileMenu, appleMenu, timeMenu);
});
timeDisplay.addEventListener("click", () => {
	toggleMenu(timeMenu, titleMenu, fileMenu, appleMenu, editMenu);
});

// Hides menus when clicked outside 
const clickOutside = (e) => {
    if (!menus.contains(e.target) && !dropdowns.contains(e.target)) {
        hide(appleMenu, fileMenu, titleMenu, editMenu, timeMenu);
    }
};

// Clicking outside of the menu or dropdown causes apps to close
main.addEventListener('click', clickOutside);
dock.addEventListener('click', clickOutside);

/// POPUPS
// Popup buttons from menu dropdown
const aboutPopupButton = document.getElementById("aboutPopupButton");
const shutdownPopupButton = document.getElementById("shutdownPopupButton");

// Buttons inside a popup
const closeAboutPopup = document.getElementById("closeAboutPopup");
const closeShutdownPopupButton = document.getElementById("closeShutdownPopupButton");
const startShutdownPopupButton = document.getElementById("startShutdownPopupButton");

// Popup windows
const aboutPopup = document.getElementById("aboutPopup");
const shutdownPopup = document.getElementById("shutdownPopup");

/**
 * This callback function opens a popup or closes it
 * @param {*} popup aboutPopup, shutdownPopup
 */
const togglePopup = (popup) => {
	hide(appleMenu);
	popup.classList.toggle("hidden");
};

// About click to handler
aboutPopupButton.addEventListener("click", () => togglePopup(aboutPopup));
closeAboutPopup.addEventListener("click", () => togglePopup(aboutPopup));

// Shutdown click to handler
shutdownPopupButton.addEventListener("click", () => togglePopup(shutdownPopup));
closeShutdownPopupButton.addEventListener("click", () => togglePopup(shutdownPopup));
startShutdownPopupButton.addEventListener("click", () => {
    hide(dock, menus, main);
    togglePopup(shutdownPopup);
    body.style.backgroundImage = "url('styles/images/desktop_background_2.jpg')";
    console.log(body.style.backgroundImage);
    body.style.backgroundSize = "900px";
    setTimeout(() => window.close(), 5000)
});

///  APPS
// App specific open or close/minimise or fullscreen buttons, and window groups
const finderButton = document.getElementById("finderButton");
const closeFinderButton = document.getElementById("closeFinderButton");
const minFinderButton = document.getElementById("minFinderButton");

const weatherButton = document.getElementById("weatherButton");
const closeWeatherButton = document.getElementById("closeWeatherButton");
const minWeatherButton = document.getElementById("minWeatherButton");

const musicButton = document.getElementById("musicButton");
const closeMusicButton = document.getElementById("closeMusicButton");
const minMusicButton = document.getElementById("minMusicButton");

const fullscreenFinderButton = document.getElementById("fullscreenFinderButton");
const fullscreenWeatherButton = document.getElementById("fullscreenWeatherButton");
const fullscreenMusicButton = document.getElementById("fullscreenMusicButton");

// App windows
const apps = document.getElementsByClassName("window__group");
const finder = document.getElementById("finder");
const weather = document.getElementById("weather");
const music = document.getElementById("music");

/**
 * This callback function opens an app in its original position or closes it
 * @param {*} app finder, weather, music
 */
const toggleApp = (app) => {
	app.classList.toggle("hidden");
	app.classList.remove("fullscreen");
	app.style.top = 3.5 + "rem";

	if (app.id == "finder") {
		app.style.left = 1 + "rem";
		finderButton.classList.toggle("highlight");
		windowOnTop(apps, finder);
	} else if (app.id == "weather") {
		app.style.left = 30 + "rem";
		weatherButton.classList.toggle("highlight");
		windowOnTop(apps, weather);
	} else if (app.id == "music") {
		app.style.left = 60 + "rem";
		musicButton.classList.toggle("highlight");
		windowOnTop(apps, music);
	}
};

// App click to handler for open/minimise/closing an app
finderButton.addEventListener("click", () => toggleApp(finder));
closeFinderButton.addEventListener("click", () => toggleApp(finder));
minFinderButton.addEventListener("click", () => toggleApp(finder)
);

weatherButton.addEventListener("click", () => toggleApp(weather));
closeWeatherButton.addEventListener("click", () => toggleApp(weather));
minWeatherButton.addEventListener("click", () => toggleApp(weather)
);

musicButton.addEventListener("click", () => toggleApp(music));
closeMusicButton.addEventListener("click", () => toggleApp(music));
minMusicButton.addEventListener("click", () => toggleApp(music));

/**
 * This callback function makes an app fullscreen or exit fullscreen
 * @param {*} app finder, weather, music
 */
const toggleFullscreenApp = (app) => {
	app.classList.toggle("fullscreen");
	app.style.top = 3.5 + "rem";
	app.style.left = 0 + "rem";
};

// App click to handler for fullscreening an app
fullscreenFinderButton.addEventListener("click", () => toggleFullscreenApp(finder));
fullscreenWeatherButton.addEventListener("click", () => toggleFullscreenApp(weather));
fullscreenMusicButton.addEventListener("click", () => toggleFullscreenApp(music));

/// MAKE APP APPEAR ON TOP OF THE OTHER APPS & Change title in menu bar
// Finds the current Z index of each app
const findAppZIndex = () => {
	return [
		getComputedStyle(finder).zIndex,
		getComputedStyle(weather).zIndex,
		getComputedStyle(music).zIndex,
	];
};

/**
 * Sets the current app to be on top of the other apps and change the title in the menu bar
 * @param {*} arrApps array of apps
 * @param {*} app specific app to focus on
 * @param {*} arrIndex app z index
 */
const windowOnTop = (arrApps, app, arrIndex = findAppZIndex()) => {
    titleButton.innerText = app.id.charAt(0).toUpperCase()+ app.id.slice(1);

    if (app.style.index != 3) {
        let a, b, c;
        if (arrIndex[0] != 3 && app.id == arrApps[0].id) {
            a = arrApps.length;
            b = (arrIndex[1] < arrIndex[2]) ? 1 : 2;
            c = a - b;
        } else if (arrIndex[1] != 3 && app.id == arrApps[1].id) {
            a = (arrIndex[0] < arrIndex[2]) ? 1 : 2; 
            b = arrApps.length;
            c = b - a;
        } else if (arrIndex[2] != 3 && app.id == arrApps[2].id) {
            c = arrApps.length;
            b = (arrIndex[0] < arrIndex[1]) ? 2 : 1;
            a = c - b; 
        }
        arrApps[0].style.zIndex = a;
        arrApps[1].style.zIndex = b;
        arrApps[2].style.zIndex = c;
    
    }
};

// App appear on top click to handlers
finder.addEventListener("click", () => windowOnTop(apps, finder));
weather.addEventListener("click", () => windowOnTop(apps, weather));
music.addEventListener("click", () => windowOnTop(apps, music));

/// DRAGGABLE MODULE
// Source: https://www.w3schools.com/howto/howto_js_draggable.asp

// Draggable handler
const dragElement = (elmnt) => {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	const dragMouseDown = (e) => {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	};

	const elementDrag = (e) => {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	};

	const closeDragElement = () => {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	};

	document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
};

// App element to handler
dragElement(finder);
dragElement(weather);
dragElement(music);
