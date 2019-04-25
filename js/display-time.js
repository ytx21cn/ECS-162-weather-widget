// Convert time to am/pm format, given the UTC 24-hour format time on OpenWeatherMap

const timeGetter = new (function () {
		
		const getUTCDateString = function (openWeatherMapDate) {
			// Open Weather Map date format: "2019-04-25 17:00:00"
			// Change it to UTC date string: "2019-04-25T17:00:00Z"			
			const dateArray = openWeatherMapDate.split(" ");
			const UTCDateString = String.prototype.concat(dateArray[0], "T", dateArray[1], "Z");
			return UTCDateString;
		}
		
		const getAmPmHours = function (hourIn24h) {
			/* return an object in the form of:
				{
					"hour": 10,
					"tt": "pm"
				}
			*/
			
			if (!((hourIn24h >= 0) && (hourIn24h <= 23) && (Math.floor(hourIn24h) === hourIn24h))) {
				throw new RangeError("hourIn24h must be an integer in [0, 23]");
			}
			
			const am = "am", pm = "pm";
			
			const result = new (function () {
				this.hour = 1;
				this.tt = am;
			})();
				
			if ((hourIn24h >= 0) && (hourIn24h <= 11)) {
				if (hourIn24h === 0) {
					result.hour = 12;
				}
				else {
					result.hour = hourIn24h;
				}
				result.tt = am;
			}
			else {
				if (hourIn24h === 12) {
					result.hour = 12;
				}
				else {
					result.hour = hourIn24h - 12;
				}
				result.tt = pm;
			}
			
			return Object.freeze(result);
		}
		
		Object.defineProperty(this, "displayTime", {
			value: function (openWeatherMapDate) {
				const UTCDateString = getUTCDateString(openWeatherMapDate);
				const date = new Date(UTCDateString);
				
				const hourObj = getAmPmHours(date.getHours());
				const hour = hourObj.hour;
				const tt = hourObj.tt;
				
				const minute = date.getMinutes();
				
				if (minute < 10) {
					return String.prototype.concat(hour, ":0", minute, " ", tt);
				}
				else {
					return String.prototype.concat(hour, ":", minute, " ", tt);
				}
				
			}
		});
		
	}
)();

