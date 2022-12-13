import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://localhost:7080/api/WeatherForecast");
      const weatherResults = await response.json();
      setWeatherData(weatherResults);
    }
    getData();

  }, []);


  return (
    <div className="App">
      <h1>there are {weatherData.length} reports</h1>
      <div >
      {weatherData.map(w => 
        <>
        <li className='WeatherContainer'>{w.summary} {w.temperatureF} Farenheit {w.temperatureC} Celcius</li>
        </>
      )}
    

      </div>


    </div>
  );
}

export default App;
