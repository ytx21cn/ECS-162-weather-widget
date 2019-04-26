"use strict";

/* Collect Doppler images */

const dopplerCollector = new (function () {
	
	let imageFileNames = [];
	let gotEnoughImages = false;
	
	function getImageFileName(date) {
		let dateStr = date.getUTCFullYear();
		dateStr += String(date.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
		dateStr += String(date.getUTCDate()).padStart(2, '0');

		let timeStr = String(date.getUTCHours()).padStart(2,'0');
		timeStr += String(date.getUTCMinutes()).padStart(2,'0');
		
		const imageFileName = String.prototype.concat("DAX_", dateStr, "_", timeStr, "_N0R.gif");
		return imageFileName;
	}
	
	function tryToGetImage(date) {
		const imageFileName = getImageFileName(date);
		const imageURL = String.prototype.concat("http://radar.weather.gov/ridge/RadarImg/N0R/DAX/") + imageFileName;
		
		const newImage = new Image();
		
		newImage.addEventListener("load", function () { // if image found
			if (imageFileNames.length < 10) {
				imageFileNames.push(imageURL);
			}
			else {
				if (!gotEnoughImages) {
					
					gotEnoughImages = true;
					console.log("Got 10 Doppler images");
				
					function updateDopplerImage(i) {
						const dopplerImage = document.getElementById("js-doppler");
						dopplerImage.style.backgroundImage = "url(" + imageFileNames[i] + ")";
						i = (i + 1) % imageFileNames.length;
						let timeout = window.setTimeout(updateDopplerImage, 100, i);
					}
					
					let i = 0;
					updateDopplerImage(i);
				}
			}
		});
		
		newImage.addEventListener("error", function () { // if image not found
			return false;
		});
		
		newImage.src = imageURL;
	}
	
	Object.defineProperty(this, "get10Images", {
		value: function () {
			const date = new Date();
			const numImagesToTry = 150;
			imageFileNames = []; // clear image file names
			
			for (let i = 0; i < numImagesToTry; ++i) {
				tryToGetImage(date);
				date.setMinutes(date.getMinutes() - 1);
				if (imageFileNames.length >= 10) {
					return;
				}
			}
			
			return;
		}
	});
	
	Object.defineProperty(this, "animate", {
		value: function () {
			this.get10Images();
			// animation will start when there are 10 images or more
		}
	});
	
})();

dopplerCollector.animate();
