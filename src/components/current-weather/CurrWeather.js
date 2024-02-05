import React from "react";
import "./CurrWeather.css";
const images = require.context('../icons', true);
const imageList = images.keys().map(image => images(image));
const icons=["01d","01n", "02d", "02n","03d","03n", "04d", "04n", "09d", "09n", "10d","10n", "11d", "11n","13d","13n", "50d","50n","unknown" ];
const iconsList={}
for (let i = 0; i < icons.length; i++) {
    iconsList[icons[i]]=imageList[i];
}
const CurrentWeather = ({ data }) => {
    
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city.toUpperCase()}</p>
                    <p className="weather-description">{data.weather[0].description.toUpperCase()}</p>
                </div>
                {/* <Image/> */}
                <img className="weather-icon" src={iconsList[data.weather[0].icon]}  alt="weather" />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
            );
};

export default CurrentWeather;
