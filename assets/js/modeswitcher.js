---
---

/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 

const iconSun = "/assets/img/sun.svg";
const iconMoon = "/assets/img/moon.svg";


function changeIconImgSrc(src) {
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

/**
 * Sets the theme as dark, regardless of browser preferences
 */
function setDarkTheme() {
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', 'dark');
	changeIconImgSrc(iconMoon);
}

/**
 * Sets the theme as light, regardless of browser preferences
 */
function setLightTheme() {
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light');
	changeIconImgSrc(iconSun);
}

function modeSwitcher() {
	let theme = localStorage.getItem('theme');
	if (theme === "dark") {
		setLightTheme();
	} else {
		setDarkTheme();
	}
}

function initTheme() {
	let theme = localStorage.getItem('theme');
	if (theme === "dark") {
		setDarkTheme();
	}	else if (theme === "light") {
		setLightTheme();
	} else if (systemInitiatedDark.matches) {
		setDarkTheme();
	} else {
		setLightTheme();
	}
}
