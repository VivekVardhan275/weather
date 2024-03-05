function GetWeather(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "36284b50a1mshd241935058ae57ap1534b9jsne3089ada6b20",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  let weather = fetch(url, options);
  weather
    .then((value) => {
      return value.json();
    })
    .then((data) => {
      console.log(data);
      let city = search.value;
      let city2 = document.getElementById("place");
      city2.innerHTML = city;
      let temp = data.temp;
      let temp2 = document.getElementById("tempe");
      temp2.innerHTML = `Current Temperature is : ${temp}°C and feels ${data.feels_like}°C`;
      let wind = data.wind_speed;
      let wind2 = document.getElementById("windspeed");
      wind2.innerHTML = `Current Wind Spped is : ${wind} km/h`;
      let humidity = data.humidity;
      let humidity2 = document.getElementById("discription");
      humidity2.innerHTML = `Current Humidity is : ${humidity}%`;
      city2.innerHTML.style.animation = "fade 1s ease-in-out";
      temp2.innerHTML.style.animation = "fade 1.5s ease-in-out";
      wind2.innerHTML.style.animation = "fade 2s ease-in-out";
      humidity2.innerHTML.style.animation = "fade 2.5s ease-in-out";
    });
}
button1.addEventListener("click", () => {
  place = search.value;
  GetWeather(place);
});
