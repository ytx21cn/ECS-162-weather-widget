"use strict";

// This file is used to obtain weather icons from assets and display them on the webpage.
// Relative paths shall be relative to the directory of **index.html**, instead of this script file.

const iconGetter = new (function () {
	
	const pathToAssets = "./assets/";
	
	const iconCodesArray = [
		// 01d/n - 04d/n
		["01d", "clearsky.svg"],
		["01n", "clear-night.svg"],
		["02d", "fewclouds-day.svg"],
		["02n", "fewclouds-night.svg"],
		["03d", "scatteredclouds.svg"],
		["03n", "scatteredclouds.svg"],
		["04d", "brokencloud.svg"],
		["04n", "brokencloud.svg"],
		
		// 09d/n - 11d/n
		["09d", "showerrain.svg"],
		["09n", "showerrain.svg"],
		["10d", "rain-day.svg"],
		["10n", "rain-night.svg"],
		["11d", "thunderstorms.svg"],
		["11n", "thunderstorms.svg"],
		
		// 13d/n
		["13d", "snow.svg"],
		["13n", "snow.svg"],
		
		// 50d/n
		["50d", "mist.svg"],
		["50n", "mist.svg"],
	];
	
	const icons = new Map(iconCodesArray);
	
	Object.defineProperty(this, "get", {
		value: 
			function (code) {
				return pathToAssets + icons.get(code);
			},
	});

})();

export { iconGetter };