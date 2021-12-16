const clock = document.querySelector(".clock");
// var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
var cityInputForm = document.querySelector(".citySearchForm");
var cityInputField = document.querySelector(".citySearchInput"); 
var citySearched = document.querySelector(".cityName")




function timeDisplay () {
    const now = moment();
    const readableDisplay = now.format("hh:mm a");
    clock.textContent = readableDisplay;
}
setInterval(timeDisplay, 1000);
timeDisplay();





var displayOpenWeatherData = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
    });
  })
};


var citySubmitHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputField.value.trim();

    if (cityName) {
        displayOpenWeatherData(cityName);
        citySearched.textContent = data.name;
        
    } else {
        alert("Please enter a valid city.");
    }
};

  cityInputForm.addEventListener("submit", citySubmitHandler);


