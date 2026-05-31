const apiKey = "53f728aa289df5d25ddf2f59d0bf4919"; // Get a free key from https://openweathermap.org/api
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherDiv = document.getElementById("weather");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    weatherDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});
