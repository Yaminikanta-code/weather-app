# Weather App 🌦️

A simple and user-friendly web application that allows users to fetch and display real-time weather information for any city using the OpenWeatherMap API.

## Features 🚀

- **City Search**: Enter any city name to get weather details.
- **Weather Details**:
  - Current temperature with max, min, and feels-like values.
  - Weather description (e.g., "clear sky").
  - Humidity percentage.
  - Wind speed.
- **Error Handling**:
  - Displays an error message if the city is not found or there’s a network issue.

## Technologies Used 🛠️

- **HTML5**: For the app structure.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: To fetch and display weather data dynamically.
- **OpenWeatherMap API**: For real-time weather data.

## How to Use 💻

1. Clone or download the project.
2. Open the `index.html` file in any modern web browser.
3. Enter the name of a city in the input field and click **Get Weather**.
4. View the weather information for the specified city.

### API Key Setup

To make the app functional, you need an API key from OpenWeatherMap:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get a free API key.
2. Replace the placeholder `API_KEY` in the JavaScript code with your actual API key:
   ```javascript
   const API_KEY = "your-api-key-here";
   ```
