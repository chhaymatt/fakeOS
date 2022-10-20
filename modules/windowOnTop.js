/**
 * Sets the current app to be on top of the other apps and change the title in the menu bar
 * @param {*} arrApps array of apps
 * @param {*} app specific app to focus on
 */
 export const windowOnTop = (app, arrApps, titleButton) => {
    titleButton.innerText = app.id.charAt(0).toUpperCase()+ app.id.slice(1);
	const arrIndex = arrApps.map((a) => getComputedStyle(a).zIndex)

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