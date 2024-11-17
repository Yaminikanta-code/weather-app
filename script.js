document.addEventListener("DOMContentLoaded", function () {
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const cityInput = document.getElementById("city-input");
  const weatherInfo = document.getElementById("weather-info");
  const errorMessage = document.getElementById("error-message");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const API_KEY = "e96839b642eb7a8940cdfab4b38a9ebb";

  getWeatherBtn.addEventListener("click", async function () {
    const city = cityInput.value.trim();
    if (city === "") {
      showError("Please enter a city name.");
      return;
    }
    try {
      const weatherData = await getWeather(city);
      displayWeather(weatherData);
    } catch (error) {
      showError(error.message);
    }
  });

  /**
   * Makes a GET request to the OpenWeatherMap API and returns the weather data
   * for the given city. If the city is not found, it throws an error.
   * @param {string} city The name of the city to get the weather for.
   * @returns {Promise<Object>} The weather data as JSON.
   */
  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url); // Await the fetch call
    if (!response.ok) {
      throw new Error("City not found. Please try again.");
    }
    return response.json(); // Return the parsed JSON data
  }

  /**
   * Displays the weather information in the UI.
   * @param {Object} data The weather data to display.
   */
  function displayWeather(data) {
    const { name, main, weather, wind } = data;

    // Display weather details
    cityName.innerHTML = `City: ${name}`;
    temperature.innerHTML = `
      Temperature: ${main.temp}°C<br>
      Max: ${main.temp_max}°C / Min: ${main.temp_min}°C<br>
      Feels like: ${main.feels_like}°C
    `;
    description.innerHTML = `Description: ${weather[0].description}`;
    humidity.innerHTML = `Humidity: ${main.humidity}%`;
    windSpeed.innerHTML = `Wind Speed: ${wind.speed} km/s`;

    // Toggle visibility
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  /**
   * Hides the weather information section and displays an error message.
   * This is used when there is an issue retrieving weather data, such as a city not being found.
   * @param {string} message The error message to display.
   */
  function showError(message) {
    errorMessage.innerHTML = message || "An error occurred. Please try again.";
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
