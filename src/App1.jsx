import React, { useState, useEffect } from 'react';
import styles from './WeatherApp.module.css';
import axios from 'axios';

import Humidity from './humadity';
import WindSpeed from './WindSpeed';
import Sunrise from './Sunrise';
import Pressure from './pressure';
import CloudLayer from './CloudLayer';

function WeatherApp() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'REKYWRSJ88H8J5FT433ZVXVAY'; // Replace with your valid key

  useEffect(() => {
    if (search === '') return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}`,
          {
            params: {
              unitGroup: 'metric',
              key: API_KEY,
              contentType: 'json',
            },
          }
        );

        const data = response.data;
        const current = data.currentConditions;

        setWeather({
          name: data.resolvedAddress,temp: current.temp,condition: current.conditions,humidity: current.humidity,windSpeed: current.windspeed,pressure: current.pressure,cloudiness: current.cloudcover,sunrise: current.sunrise,
        });

        setError('');
      } catch (err) {
        console.error(err);
        setWeather(null);
        setError(err.response?.status === 404 ? 'City not found!' : 'Error fetching weather data.');
      }
    };

    fetchWeather();
  }, [search]);

  const handleSearch = () => {
    if (input.trim() === '') return;
    setSearch(input.trim());
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌦️ Weather App</h1>

      <div>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter city name)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>Search</button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.weatherInfo}>
          <h2>📍 City: {weather.name}</h2>
          <h2>🌡️ Temp: {weather.temp}°C</h2>
          <h2>🌈 Condition: {weather.condition}</h2>
          <Humidity value={weather.humidity} />
          <WindSpeed value={weather.windSpeed} />
          <Pressure value={weather.pressure} />
          <CloudLayer value={weather.cloudiness} />
          <Sunrise value={weather.sunrise} />
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
