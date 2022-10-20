/// DRAGGABLE MODULE
// Source: https://www.w3schools.com/howto/howto_js_draggable.asp

// Draggable handler
export const dragElement = (elmnt) => {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

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
		document.removeEventListener("mouseup", closeDragElement);
		document.removeEventListener("mousemove", elementDrag);
	};

	const dragMouseDown = (e) => {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.addEventListener("mouseup", closeDragElement);
		// call a function whenever the cursor moves:
		document.addEventListener("mousemove", elementDrag);
	};
	document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
};