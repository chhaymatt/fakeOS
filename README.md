# fakeOS
## Visit
https://chhaymatt.github.io/fakeOS/

## Introduction
Replicating the layout and format of the Mac operating system using HTML, SCSS and controlling interactive elements with JS.

## Preview
![Preview of Matthew Chhay's fakeOS](https://i.imgur.com/q50wJeP.png)

## MVP
### HTML/SCSS
- ✅ Wallpaper scales to fit the viewport
- ✅ The menu is positioned appropriately at the top and the app icons are in the dock at the bottom
- ✅ Menu contains a flex with content inside it
- ✅ Contains 3 apps - Finder, Weather, and Music
- ✅ Apps look consistent and contain text, an image or a form
### JavaScript
- ✅ Content is interactive via .addEventListener("click", callbackFunction) and not the HTML onclick attribute
- ✅ Functions and variables are named appropriately
- ✅ Functions are declared using the arrow syntax

# Release Notes
## Known Issues
### Issue 1
#### Symptom
- clickOutside function may cause an app to stop responding (can't be dragged or clicked to the front)
#### Work around
- Commented out the clickOutside function and menu dropdowns have to be closed by clicking on the most recent menu button

## Issue 2
### Symptom
- Time menu dropdown appears to the left instead of the right

