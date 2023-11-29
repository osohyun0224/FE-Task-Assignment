const axios = require('axios');

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const resolvers = {
  Query: {
    getCurrentWeather: async (_, { city }) => {
      try {
        const response = await axios.get(`${BASE_URL}/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        });

        const data = response.data;
        return {
          date: new Date(data.dt * 1000).toISOString(),
          location: data.name,
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          weatherIconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
      } catch (error) {
        console.error("Error fetching current weather data:", error);
        return null;
      }
    },
    getForecast: async (_, { city }) => {
      try {
        const response = await axios.get(`${BASE_URL}/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        });

        const forecastData = response.data.list.map((item) => ({
          date: new Date(item.dt * 1000).toISOString(),
          temperature: item.main.temp,
          description: item.weather[0].description,
          weatherIconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
        }));

        return forecastData.slice(0, 5);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
        return [];
      }
    },
  },
};

module.exports = resolvers;
