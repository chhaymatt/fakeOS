# fakeOS <!-- omit in toc -->

> Matthew Chhay's take on the Mac operating system in the web browser.
> [Open Live Preview](https://chhaymatt.github.io/fakeOS/)

## Preview <!-- omit in toc -->

![Preview of Matthew Chhay's fakeOS](https://i.imgur.com/q50wJeP.png)

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [MVP](#mvp)
  - [HTML/SCSS](#htmlscss)
  - [JavaScript](#javascript)
- [Setup](#setup)
  - [For viewing locally](#for-viewing-locally)
  - [For further development](#for-further-development)
- [Tools Used](#tools-used)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)

## Introduction

Replicating the layout and format of the Mac operating system using HTML, SCSS, and JS.

## Features

-   Mimics the macOS design with the dock, menu bar and translucent backgrounds
-   Interactable menu bar based on Finder app
-   Contains 3 draggable app windows with full screen/minimise/quit buttons
-   User changeable date and time format

## Technologies Used

-   HTML
-   SCSS/CSS
-   JavaScript

## Screenshots

![Apple menu bar](https://i.imgur.com/SKPdKm7.png)
![User changeable date and time format](https://i.imgur.com/2idqwp4.png)
![Full screen](https://i.imgur.com/RZujsXI.png)

## MVP

### HTML/SCSS

-   Wallpaper scales to fit the viewport
-   The menu is positioned appropriately at the top and the app icons are in the dock at the bottom
-   Menu contains a flex with content inside it
-   Contains 3 apps - Finder, Weather, and Music
-   Apps look consistent and contain text, an image or a form

### JavaScript

-   Content is interactive via .addEventListener("click", callbackFunction) and not the HTML onClick attribute
-   Functions and variables are named appropriately
-   Functions are declared using the arrow syntax

## Setup

### For viewing locally

1. Git clone this repo `git clone git@github.com:chhaymatt/fakeOS.git`
2. Get Live Server for VS Code
3. Open index.html and Press Go Live in the bottom right corner in VS Code

### For further development

1. Git clone this repo `git clone git@github.com:chhaymatt/fakeOS.git`
2. Install sass in Terminal `npm install -g sass`
3. Get Prettier and Live Server for VS Code (links below)
4. Run SASS watch command from the /styles folder in Terminal `sass --watch --no-source-map style.scss style.css`
5. Open index.html and Press Go Live in the bottom right corner in VS Code

## Tools Used

-   Live Server - to see live locally without refreshing. [Get Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
-   Prettier - to tidy up code in spacing and structure. [Get Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   Font Awesome - a library of icons that can be imported easily. [Get Font Awesome icons](https://fontawesome.com/start)
-   Favicon.io - generate a favicon. [Generate favicon](https://favicon.io/favicon-generator/)
-   Meta Tags - generate metadata. [Generate metadata](https://metatags.io/)
-   Coolors - colour palette generator. [Generate colour palette](https://coolors.co/generate)
-   Google Fonts - a library of free fonts. [Get Google Fonts](https://fonts.google.com/)

## Project Status

Project is paused

## Room for Improvement

-   Rebuild project in React
-   Dragging an app does not appear on top of the other apps until click release
-   Menu bar groups should display app-specific menus, currently it shows Finder
-   A warning should appear that this project is viewed best on a desktop/laptop screen
-   Apps should be interactable
