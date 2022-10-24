import Config from 'react-native-config';
import axios from 'axios';

const weatherApi = Config.WEATHER_API_URL;
const weatherApiKey = Config.WEATHER_API_KEY;
const api = Config.API_URL

export const fetchWeatherWithLatLon = async (lat, lon) => {
    try {
        let result = await axios.get(`${weatherApi}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)
        if (result.data)
            return result
        else fetchWeatherWithCity()
    } catch (e) {
        return null
    }
};

export const fetchWeatherWithCity = async () => {
    try {
       return await axios.get(`${weatherApi}?q=Singapore&appid=${weatherApiKey}&units=metric`)
    } catch (e) {
        return null
    }
  };

export const fetchEnergyUsage = async (date) => {
    try {
        let result =  await axios.get(`${api}daily?date=${date}`)
        return result.data
    } catch (e) {
        return null
    }
  };