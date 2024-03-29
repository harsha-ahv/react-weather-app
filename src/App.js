import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import CurrWeather from "./components/current-weather/CurrWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Tapi";
import Forecast from "./components/forecast/Forecast";
import Facts from "./components/facts/Facts";
import Convo from "./components/convo/Convo";
import Bot from "./components/chatbot/Bot";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange=(searchData)=>{
    const [lat,lon]=searchData.value.split(" ");
    const currentWeatherFetch=fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
    const forecastWeatherFetch=fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    Promise.all([currentWeatherFetch,forecastWeatherFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();
      // console.log(weatherResponse);
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });
      // console.log(currentWeather)
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div className="container">
      <Search  OnSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrWeather data={currentWeather} />}
      {currentWeather && <Convo data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}
      <Bot/>
      <Facts/>
    </div>
  );
}

export default App;
