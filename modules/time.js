/**
 * This function displays the current date and time based on user settings
 * @param {boolean} display12           Show 12 hour time   e.g. 9:41 am
 * @param {boolean} displayFullDay      Show full day,      e.g. Tuesday
 * @param {boolean} displayFullMonth    Show full month,    e.g. October
 * @param {boolean} displayYear         Show year,          e.g. 2022
 * @param {boolean} displaySeconds      Show seconds        e.g. 9:41:59 am
 * @param {boolean} displayAmpm         Show am/pm          e.g. 9:41:59 am
 */
 export const time = (
	display12,
	displayFullDay,
	displayFullMonth,
	displayYear,
	displaySeconds,
    displayAmpm
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
		return `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m} ${ampm}`;
	} else {
		return `${dayFull} ${dayNumber} ${month} ${year} ${h}:${m}:${s} ${ampm}`;
	}
};