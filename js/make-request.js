"use strict";


const requestMaker = new (function () {
	
	const searchBox = document.getElementById("js-search-box");
	const sumbitButton = document.getElementById("js-submit");
	
	// API key format: https://api.openweathermap.org/data/2.5/forecast/hourly?q=Davis,US&appid=27a7b6edb55dd1f09b742757826b9053&units=imperial
	const APIFirstPart = "https://api.openweathermap.org/data/2.5/forecast/hourly?q=";
	const APISecondPart = "&appid=27a7b6edb55dd1f09b742757826b9053&units=imperial"
	
	function getRequestPromise(url) {
		// Source consulted: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 
		
		return new Promise(function (resolve) {
			let xhr = new XMLHttpRequest();
			
			// We want to read JSON format for this assignment
			const mimeType = "application/json";
			xhr.overrideMimeType(mimeType);
			
			// Define the functions to be executed upon success/failure
			xhr.onload = function () { // if succeeded
				resolve(xhr.responseText);
			};
			xhr.onerror = function () { // if failed
				console.log(xhr.status);
			};
			
			// Request method: GET (retrieve data only)
			xhr.open("GET", url); 
			xhr.send();
		});
	}
	
	async function getResponseText(url) {
		// Source consulted: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
		// requestPromise waits for the promise returned by getRequestPromise(), and then return the response text that is resolved
		let requestPromise = await getRequestPromise(url);
		let responseText = Promise.resolve(requestPromise);
		return responseText;
	}
	
	Object.defineProperty(this, "search", {
		value: async function (city) {
			const url = APIFirstPart + city + APISecondPart;
			
			let responseText = await getResponseText(url);
			const weatherJSON = JSON.parse(responseText);
			
			console.log(weatherJSON);
		}
	});
	
})();

console.log(requestMaker);
requestMaker.search("Davis,US");
