import {dragElement} from "./modules/dragElement.js";
import {windowOnTop} from "./modules/windowOnTop.js";
import {time} from "./modules/time.js";

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


// Refresh HTML time display every 1000 miliseconds (1 second)
setInterval(
	() =>
		timeDisplay.innerHTML = time(
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
 * Hides elements
 * @param  {...any} elementsToHide
 */
const hide = (...elementsToHide) => {
	elementsToHide.forEach((element) => element.classList.add("hidden"));
};

/**
 * toggleMenu displays a selected menu based on user click and hides the other menus
 * @param {*} menuToToggle Display the required menu e.g. appleMenu
 * @param {Array} menusToHide An array of menus to hide
 */
 const toggleMenu = (menuToToggle, menusToHide) => {
	menuToToggle.classList.toggle("hidden");
	hide(...menusToHide);
};


// Menu click to handler
appleButton.addEventListener("click", () => {
	toggleMenu(appleMenu, [fileMenu, titleMenu, editMenu, timeMenu]);
});
titleButton.addEventListener("click", () => {
	toggleMenu(titleMenu, [appleMenu, fileMenu, editMenu, timeMenu]);
});
fileButton.addEventListener("click", () => {
	toggleMenu(fileMenu, [appleMenu, editMenu, titleMenu, timeMenu]);
});
editButton.addEventListener("click", () => {
	toggleMenu(editMenu, [titleMenu, fileMenu, appleMenu, timeMenu]);
});
timeDisplay.addEventListener("click", () => {
	toggleMenu(timeMenu, [titleMenu, fileMenu, appleMenu, editMenu]);
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
startShutdownPopupButton.addEventListener("click", () => toggleShutdown());

// User clicks shut down, the page will go blank and close itself after 5 seconds
const toggleShutdown = () => {
	hide(dock, menus, main);
    togglePopup(shutdownPopup);
	body.style.backgroundColor = "#161616";
    body.style.backgroundImage = "url('styles/images/desktop_background_2.jpg')";
    body.style.backgroundSize = "900px";
    setTimeout(() => window.close(), 5000);
}

///  APPS
// App specific open or close/minimise or fullscreen buttons, and window groups
const finderButton = document.getElementById("finderButton");
const weatherButton = document.getElementById("weatherButton");
const musicButton = document.getElementById("musicButton");

// App windows
const finder = document.getElementById("finder");
const weather = document.getElementById("weather");
const music = document.getElementById("music");
const apps = [finder, weather, music];

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
		windowOnTop(finder, apps, titleButton);
	} else if (app.id == "weather") {
		app.style.left = 30 + "rem";
		weatherButton.classList.toggle("highlight");
		windowOnTop(weather, apps, titleButton);
	} else if (app.id == "music") {
		app.style.left = 60 + "rem";
		musicButton.classList.toggle("highlight");
		windowOnTop(music, apps, titleButton);
	}
};

// App window button logic to handler for minimise/closing and fullscreening
const windowButtonLogic = (app) => {
	app.querySelector(".minButton").addEventListener("click", () => toggleApp(app));
	app.querySelector(".closeButton").addEventListener("click", () => toggleApp(app));
	app.querySelector(".fullscreenButton").addEventListener("click", () => toggleFullscreenApp(app));
}

// App window buttons to logic
windowButtonLogic(finder);
windowButtonLogic(weather);
windowButtonLogic(music);

// Dock app buttons to handler
finderButton.addEventListener("click", () => toggleApp(finder));
weatherButton.addEventListener("click", () => toggleApp(weather));
musicButton.addEventListener("click", () => toggleApp(music));

/**
 * This callback function makes an app fullscreen or exit fullscreen
 * @param {*} app finder, weather, music
 */
const toggleFullscreenApp = (app) => {
	app.classList.toggle("fullscreen");
	app.style.top = 3.5 + "rem";
	app.style.left = 0 + "rem";
};

// App appear on top click to handlers
finder.addEventListener("click", () => windowOnTop(finder, apps, titleButton));
weather.addEventListener("click", () => windowOnTop(weather, apps, titleButton));
music.addEventListener("click", () => windowOnTop(music, apps, titleButton));


// App element to drag handler
dragElement(finder);
dragElement(weather);
dragElement(music);
