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
	hideMenus(timeMenu);
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
	hideMenus(timeMenu);
};

// Toggle full month length setting
const toggleMonthFull = () => {
	displayFullMonth = !displayFullMonth;
	monthFullButton.innerText = displayFullMonth
		? "Hide full month"
		: "Show full month";
	time(
		display12,
		displayFullDay,
		displayFullMonth,
		displayYear,
		displaySeconds,
		displayAmpm
	);
	hideMenus(timeMenu);
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
	hideMenus(timeMenu);
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
	hideMenus(timeMenu);
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
	hideMenus(timeMenu);
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

/// MENU
// Menu buttons
const appleButton = document.getElementById("appleButton");
const titleButton = document.getElementById("titleButton");
const fileButton = document.getElementById("fileButton");
const editButton = document.getElementById("editButton");
const timeDisplay = document.getElementById("timeDisplay");
const menus = document.getElementsByClassName("menu__group");

// Dropdown groups
const appleMenu = document.getElementById("appleMenu");
const titleMenu = document.getElementById("titleMenu");
const fileMenu = document.getElementById("fileMenu");
const editMenu = document.getElementById("editMenu");
const timeMenu = document.getElementById("timeMenu");
const dropdowns = document.getElementsByClassName("dropdown__group");

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
 * Hides menus - TODO: after a user clicks inside a dropdown or outside the dropdown
 * @param  {...any} menusToHide
 */
const hideMenus = (...menusToHide) => {
	menusToHide.forEach((menu) => menu.classList.add("hidden"));
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

/// POPUPS
// Popup buttons from menu dropdown
const aboutPopupButton = document.getElementById("aboutPopupButton");
const shutdownPopupButton = document.getElementById("shutdownPopupButton");

// Buttons inside a popup
const closeAboutPopup = document.getElementById("closeAboutPopup");
const closeShutdownPopupButton = document.getElementById(
	"closeShutdownPopupButton"
);
const startShutdownPopupButton = document.getElementById(
	"startShutdownPopupButton"
);

// Popup windows
const aboutPopup = document.getElementById("aboutPopup");
const shutdownPopup = document.getElementById("shutdownPopup");

/**
 * This callback function opens a popup or closes it
 * @param {*} popup aboutPopup, shutdownPopup
 */
const togglePopup = (popup) => {
	hideMenus(appleMenu);
	popup.classList.toggle("hidden");
};

// About click to handler
aboutPopupButton.addEventListener("click", () => togglePopup(aboutPopup));
closeAboutPopup.addEventListener("click", () => togglePopup(aboutPopup));

// Shutdown click to handler
shutdownPopupButton.addEventListener("click", () => togglePopup(shutdownPopup));
closeShutdownPopupButton.addEventListener("click", () =>
	togglePopup(shutdownPopup)
);
startShutdownPopupButton.addEventListener("click", () =>
	togglePopup(shutdownPopup)
);

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

const fullscreenFinderButton = document.getElementById(
	"fullscreenFinderButton"
);
const fullscreenWeatherButton = document.getElementById(
	"fullscreenWeatherButton"
);
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
const toggleOpenCloseApp = (app) => {
	app.classList.toggle("hidden");
	app.classList.remove("fullscreen");
	app.style.top = 3.5 + "rem";

	if (app.id == "finder") {
		app.style.left = 1 + "rem";
		finderButton.classList.toggle("highlight");
		windowOnTopFinder();
	} else if (app.id == "weather") {
		app.style.left = 30 + "rem";
		weatherButton.classList.toggle("highlight");
		windowOnTopWeather();
	} else if (app.id == "music") {
		app.style.left = 60 + "rem";
		musicButton.classList.toggle("highlight");
		windowOnTopMusic();
	}
};

// App click to handler for open/minimise/closing an app
finderButton.addEventListener("click", () => toggleOpenCloseApp(finder));
closeFinderButton.addEventListener("click", () => toggleOpenCloseApp(finder));
minimiseFinderButton.addEventListener("click", () =>
	toggleOpenCloseApp(finder)
);

weatherButton.addEventListener("click", () => toggleOpenCloseApp(weather));
closeWeatherButton.addEventListener("click", () => toggleOpenCloseApp(weather));
minimiseWeatherButton.addEventListener("click", () =>
	toggleOpenCloseApp(weather)
);

musicButton.addEventListener("click", () => toggleOpenCloseApp(music));
closeMusicButton.addEventListener("click", () => toggleOpenCloseApp(music));
minimiseMusicButton.addEventListener("click", () => toggleOpenCloseApp(music));

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
fullscreenFinderButton.addEventListener("click", () =>
	toggleFullscreenApp(finder)
);
fullscreenWeatherButton.addEventListener("click", () =>
	toggleFullscreenApp(weather)
);
fullscreenMusicButton.addEventListener("click", () =>
	toggleFullscreenApp(music)
);

/// MAKE APP APPEAR ON TOP OF THE OTHER APPS & Change title in menu bar
// Finds the current Z index of each app
const findAppZIndex = () => {
	return [
		getComputedStyle(finder).zIndex,
		getComputedStyle(weather).zIndex,
		getComputedStyle(music).zIndex,
	];
};

// Set the current app at the highest z index and reduce the z index of the other apps, Change title in menu bar
const windowOnTopFinder = () => {
	let index = findAppZIndex();
	titleButton.innerText = "Finder";
	if (index[0] < index[1] || index[0] < index[2]) {
		finder.style.zIndex = apps.length;
		weather.style.zIndex--;
		music.style.zIndex--;
	}
};

const windowOnTopWeather = () => {
	let index = findAppZIndex();
	titleButton.innerText = "Weather";
	if (index[1] < index[0] || index[1] < index[2]) {
		finder.style.zIndex--;
		weather.style.zIndex = apps.length;
		music.style.zIndex--;
	}
};

const windowOnTopMusic = () => {
	let index = findAppZIndex();
	titleButton.innerText = "Music";
	if (index[2] < index[0] || index[2] < index[1]) {
		finder.style.zIndex--;
		weather.style.zIndex--;
		music.style.zIndex = apps.length;
	}
};

// App appear on top click to handlers
finder.addEventListener("click", windowOnTopFinder);
weather.addEventListener("click", windowOnTopWeather);
music.addEventListener("click", windowOnTopMusic);

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
