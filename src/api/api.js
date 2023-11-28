import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    return response.data;
  } catch (error) {
    console.error("날씨 데이터를 불러오지 못했습니다.", error);
    return null;
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    return response.data.list.map(item => ({
      ...item,
      weatherIconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
    }));
  } catch (error) {
    console.error("예보 데이터를 불러오지 못했습니다.", error);
    return [];
  }
};
