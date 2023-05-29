import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [city, setCity] = useState('');
  //const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=a79707aaa24e46929a8170805232905&q=${city}`
      );
      const weatherData = response.data;
      alert(weatherData.current.temp_c+"°C");
      //navigate(`/weather/${city}`, { state: { weatherData } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Home;
