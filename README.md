<div align="center">

<h3 align="center">Weather Forecast App</h3>

  <div>
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h4 align="center"
        Preview: 
        <a href="https://sba-320h-weather-app.onrender.com/" target="_blank">
                    https://sba-320h-weather-app.onrender.com
        </a>
    </h4>

</div>
This is a Weather Forecast web application built using React.js. It allows users to search for and view the current and forecasted weather conditions for a specific location, either by entering a city name or zip code.

### Features

- Display current weather and forecast for the next few days.
- Ability to search for weather by city name or zip code.
- Uses geolocation to get the weather data based on the user's location.
- Option to switch between Celsius and Fahrenheit temperature units.

### Technologies and Frameworks

- **React.js**: The primary library used for building the user interface.
- **JavaScript (ES6+)**: Used for writing functional components and utility functions.
- **Context API**: For managing global state across the application.
- **React Hooks**: useState, useEffect, useContext are utilized for state and lifecycle management.
- **Axios**: For making API calls to the OpenWeatherMap API.
- **Tailwind CSS**: For styling components.

### Components and Files

1. Components

- Header: Contains the main navigation, logo, search input, and a unit switcher.
- Footer: Displays footer information.
- Home: The main page component that fetches and displays weather data.
- WeatherList: Displays a list of WeatherItem components grouped by day.
- WeatherItem: Shows individual weather data for each hour.
- Search: Input field for searching city or zip code.
- Switcher: Allows users to switch between Celsius and Fahrenheit.

2. Context

- GlobalContext: Manages the state for search input and temperature unit (Celsius/Fahrenheit).
- GlobalProvider: Wraps the application and provides context values.

3. Utilities

- DateUtils: Contains functions for formatting timestamps to readable dates and 12-hour time format.

4. API

- weatherApi.js: Contains functions for fetching weather data and coordinates by location using Axios and the OpenWeatherMap API.

5. Miscellaneous

- Spinner: A loading spinner component used to indicate data fetching.
- Logo: Component for displaying the application's logo.

6. External APIs

- OpenWeatherMap API: Used for fetching weather data and location coordinates.

7. Styling

- Tailwind CSS: Utility-first CSS framework for styling the application.
