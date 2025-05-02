import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = 'd29f5d69093583691c87575c2f63d7e5'; // Replace this

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert('City not found!');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  };

  const inputStyle = {
    padding: '10px',
    width: '80%',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };

  const weatherBoxStyle = {
    marginTop: '20px',
    backgroundColor: '#e0f7fa',
    padding: '15px',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h2>🌤️ Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={inputStyle}
      />
      <br />
      <button onClick={fetchWeather} style={buttonStyle}>Get Weather</button>

      {loading && <p>Loading...</p>}

      {weather && weather.main && (
        <div style={weatherBoxStyle}>
          <h3>{weather.name}</h3>
          <p><strong>{weather.weather[0].description}</strong></p>
          <p>🌡️ Temp: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
