const cityForm = document.getElementById("cityForm");
const api = "05078ce19f85a3fe9b4a8bf548f7fff7";
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const cityValue = cityForm.querySelector("input").value;
  getCoordinates(cityValue);
});
function getCoordinates(cityValue) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&appid=${api}`;
  fetch(url)
    .then((response) => {
        
      return response.json();
    })
    .then((data) => {

      console.log(data);
      const {lat,lon} = data[0]
        getWeather(lat, lon)
    });
}
function getWeather (lat,lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`
    fetch(url)
    .then((response) => {
        
      return response.json();
    })
    .then((data) => {

      console.log(data);
    fiveDay(lat, lon)
    renderCurrentWeather(data)
    });
}


    
function fiveDay (lat, lon){
  const url =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data)=> {
    
    console.log(data);
   

  });
}

function renderCurrentWeather(data){
  const parentDiv = document.querySelector('.current')
  parentDiv.innerHTML=""
  const clone= document.getElementById
  ("currentWeatherData").content.cloneNode(true);
  clone.getElementById("cityName").textContent= data.name;

  clone.getElementById('Date').textContent=new Date(data.dt * 1000).toLocaleDateString();

  clone.getElementById("temp").textContent=data.main.temp;

  clone.getElementById("wind").textContent=data.wind.speed;

  clone.getElementById("humidity").textContent=data.main.humidity;
  console.log(clone)
  parentDiv.append(clone)
}
