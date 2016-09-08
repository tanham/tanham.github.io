
var units = 'imperial';

var Coordinates = function(lat, lon) {
	this.latitude = lat;
	this.longitude = lon;
};

var coord = new Coordinates(0, 0);

function getLocation() {
	var display = document.getElementById('weather');
	if(navigator.getlocation) {
		navigator.getlocation.getCurrentPosition(showPosition);
	} else {
		display.innerHTML = 'Geolocation is not supported by this browser.';
	}
};

function showPosition(position) {
	coord.latitude = position.coords.latitude;
	coord.longitude = position.coords.longitude;
	callWeatherAPI();
};

function getURL(lat, lon, units) {
	var appid = 'd5706b02c8e2e5793cf3ebff8322d845';
	return 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + units + '&appid=' + appid;
};

function Unit() {
	$('#f').is(':checked') ? units = 'imperial' : units 'metric';
	callWeatherAPI();
};

function getWeather(data) {
	var temp = data.main.temp;
	var tempUnit = units === 'metric' ? 'C' : 'F';
	var windUnit = untis === 'metric' ? ' meters/sec' : ' miles/hour';
	var description = data.weather[0].description;
	var code = data.weather[0].icon;
	var wspeed = data.wind.speed;
	var city = data.name;

	var html = '<img src="https://openweathermap.org/img/w/' + code +
    '.png" alt="Weather Icon" class="icon">' + '<p> ' + Math.round(temp) + ' ' + tempUnit +
    ', ' + description + '<br> Wind Speed: ' + wspeed + windUnit + '</p><p>' +
    city + '</p>';

    $('#weather').html(html);

};

function callWeatherAPI() {
	var url = getURL(coord.latitude, coord.longitude, units);
	$.getJSON(url, getWeather);
};

function start() {
	getLocation();
	callWeatherAPI();
};

$('input[type=radio][name=farenheit-celcius]').change(Unit);
$(document).ready(getLocation);




































var apikey = "d5706b02c8e2e5793cf3ebff8322d845";

loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=d5706b02c8e2e5793cf3ebff8322d845&units=imperial", gotData);

function loadJSON(callback) {
	var localWeather = new XMLHttpRequest();
		localWeather.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=d5706b02c8e2e5793cf3ebff8322d845&units=imperial", true)
		localWeather.onreadystatechange = function () {
			if (localWeather == 4 && xhttp.status == 200) {
				callback(localWeather.responseText);
			}
		};
		localWeather.send(null);
}










