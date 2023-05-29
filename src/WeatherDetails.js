import React from 'react';


const WeatherDetails = ({ weatherData }) => {
    if (!weatherData) {
      return <p>Temperature: {weatherData.current.temp_c}°C</p>;
    }
  
    return (
      <div>
        <h2>{weatherData.location.name}</h2>
        <p>Temperature: {weatherData.current.temp_c}°C</p>
        <p>Condition: {weatherData.current.condition.text}</p>
        {/* Display other weather information as needed */}
      </div>
    );
  };



export default WeatherDetails;
