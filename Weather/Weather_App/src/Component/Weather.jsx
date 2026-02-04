import React, { useState } from "react";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const weatherCodes = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light Drizzle",
    61: "Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Snow",
    95: "Thunderstorm",
  };

  const getWeather = async () => {
    const cityName = city.trim();
    if (!cityName) {
      setWeather({ error: "Please enter a city name" });
      return;
    }

    try {
      // 1️⃣ Get coordinates for the city
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setWeather({ error: "City not found. Try a different name!" });
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2️⃣ Fetch real-time weather
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
      );

      const data = await res.json();

      if (!data.current_weather) {
        setWeather({ error: "Weather data unavailable" });
        return;
      }

      setWeather({
        ...data.current_weather,
        location: `${name}, ${country}`,
      });
    } catch (err) {
      setWeather({ error: "Network error, Try again!" });
    }
  };

  return (
    <div className="weather-container">
      <h2 className="title">🌦 Weather App</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />

        <button onClick={getWeather} className="btn-search">
          Search
        </button>
      </div>

      {/* Weather Info */}
      {weather && !weather.error && (
        <div className="weather-card">
          <h3 className="city-name">{weather.location}</h3>

          <p className="temp">🌡 Temperature: {weather.temperature}°C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
          <p>🧭 Wind Direction: {weather.winddirection}°</p>
          <p>🌥 Condition: {weatherCodes[weather.weathercode]}</p>
        </div>
      )}

      {weather?.error && <p className="error">{weather.error}</p>}
    </div>
  );
}

export default Weather;
