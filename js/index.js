"use strict";

const switchViewController = new (function () {
	const expandButton = document.getElementById("js-expand");
	const collapseButton = document.getElementById("js-collapse");
	
	const futureWeatherSection = document.getElementById("js-future-weather");
	const visibilityAttr = "data-js-visibility";
	
	Object.defineProperty(this, "expand", {
		value: function () {
			futureWeatherSection.setAttribute(visibilityAttr, "expanded");
		}
	});
	
	Object.defineProperty(this, "collapse", {
		value: function () {
			futureWeatherSection.setAttribute(visibilityAttr, "collapsed");
		}
	});
	
	expandButton.addEventListener("click", this.expand);
	collapseButton.addEventListener("click", this.collapse);
	
	window.addEventListener("resize", function () {
		if (window.innerWidth >= 600) {
			console.log(this);
			this.collapse();
		}
	}.bind(this));
	
})();
