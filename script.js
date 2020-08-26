var locationHeader = document.createElement("h2");
locationHeader.textContent = "Location";
document.getElementById("locationHour").appendChild(locationHeader);

var address = document.createElement("p");
address.textContent = "123 Vermont St., #139";
document.getElementById("locationHour").appendChild(address);

var cityState = document.createElement("p");
cityState.textContent = "City, State 000000";
document.getElementById("locationHour").appendChild(cityState);

var blank = document.createElement("br");
document.getElementById("locationHour").appendChild(blank);

var hourHeader = document.createElement("h2");
hourHeader.textContent = "Hours";
document.getElementById("locationHour").appendChild(hourHeader);

var monHour = document.createElement("p");
monHour.textContent = "Mon: 11:00AM - 9:30PM";
document.getElementById("locationHour").appendChild(monHour);

var tueHour = document.createElement("p");
tueHour.textContent = "Tue: 11:00AM - 9:30PM";
document.getElementById("locationHour").appendChild(tueHour);

var wedHour = document.createElement("p");
wedHour.textContent = "Wed: 11:00AM - 9:30PM";
document.getElementById("locationHour").appendChild(wedHour);

var thuHour = document.createElement("p");
thuHour.textContent = "Thu: 11:00AM - 9:30PM";
document.getElementById("locationHour").appendChild(thuHour);

var friHour = document.createElement("p");
friHour.textContent = "Fri: 11:00AM - 11:30PM";
document.getElementById("locationHour").appendChild(friHour);

var satHour = document.createElement("p");
satHour.textContent = "Sat: 11:00AM - 11:30PM";
document.getElementById("locationHour").appendChild(satHour);

var sunHour = document.createElement("p");
sunHour.textContent = "Sun: 11:00AM - 9:30PM";
document.getElementById("locationHour").appendChild(sunHour);

document.getElementById("locationHour").style.fontSize = "large";