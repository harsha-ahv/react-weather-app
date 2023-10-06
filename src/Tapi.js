import axios from 'axios';

export default axios.create({
	baseURL:'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
	headers: {
    'X-RapidAPI-Key': '5f501d1997msh53383b854d740acp112604jsn2eecdcf6df1c',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
})

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "0c969ba1fc929f2fbdf288ef15df0c9f"; 
