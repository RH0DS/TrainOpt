import './Home.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';


function Home(props) {


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
    
    <div className="home-container">
      <Header/>
      <div className="container">

      <h1>there are {weatherData.length} reports</h1>
      
      <h2>The Home screen</h2>
    
      <div >
        <ul>
              {weatherData.map(w => 
                <li key ={w.date}>{w.summary} {w.temperatureF} Farenheit {w.temperatureC} Celcius</li> 
              )}
        </ul>
      </div>

      </div>
        <section className="welcome-text">
          <p >Get to your personal goals your way</p>
        </section>
   
      <Link to="/">
        <button className="btn-get-started"> Get Started!</button>
      </Link>
    </div>
  );
}

export default Home;