import axios from 'axios';


export default axios.create({
	baseURL:'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
	headers: {
    'X-RapidAPI-Key': 'RAPID_API_KEY',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
})

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "OPEN_WEATHER_API"; 

export const BARD_API_KEY = "BARD_API"
