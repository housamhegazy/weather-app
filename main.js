let weather = {
  apiKey: "d47ac8f7dc720fad39bae880acb8e4c5",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey +
        "&lang=en&units=metric"
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { description, icon } = data.weather[0];
    const { speed } = data.wind;
    document.querySelector(".city").textContent = "weather in " + name;
    document.querySelector(".temp").textContent = temp + " ℃";
    document.querySelector(".description").textContent = description;
    document.querySelector(".humidity").textContent =
      "humidity : " + humidity + "%";
    document.querySelector(".wind").textContent =
      "wind speed : " + speed + " km/hour";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search .search-bar").value);
  },
};
weather.fetchWeather("paris");

document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

document
  .querySelector(".search .search-bar")
  .addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      weather.search();
    }
  });
