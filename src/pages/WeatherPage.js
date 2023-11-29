import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './WeatherPage.module.css';
import { fetchWeather, fetchForecast } from '../api/api';

const Header = dynamic(() => import("../components/Header"));
const Dropdown = dynamic(() => import("../components/Dropdown"));

const getPopulation = (city) => {
  const populations = {
    Seoul: 9776000,
    Tokyo: 13960000,
    Paris: 2161000,
    London: 8982000,
  };

  return populations[city] || 'Unknown';
};

const WeatherPage = ({ city }) => {
  const [weatherData, setWeatherData] = useState({
    date: "",
    location: "",
    population: getPopulation(city),
    temperature: "",
    feelsLike: "",
    weatherDescription: "",
    windSpeed: "",
    humidity: "",
    weatherIconUrl: "",
  });

  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const weatherResponse = await fetchWeather(city);
      const forecastResponse = await fetchForecast(city);

      if (weatherResponse) {
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`;

        const date = new Date(weatherResponse.dt * 1000).toLocaleString(
          "en-US",
          {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          },
        );

        const newWeatherData = {
          date,
          location: weatherResponse.name,
          population: "9776000",
          temperature: weatherResponse.main.temp.toFixed(1),
          feelsLike: `Feels like ${weatherResponse.main.feels_like.toFixed(
            1,
          )}℃`,
          weatherDescription: weatherResponse.weather[0].description,
          windSpeed: `풍속 ${weatherResponse.wind.speed} m/s`,
          humidity: `습도 ${weatherResponse.main.humidity}%`,
          weatherIconUrl,
        };
        setWeatherData(newWeatherData);
      }

      setForecastData(forecastResponse);
    };

    fetchData();
  }, [city]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageContainer}>
        <Image src="/image/img.png" alt="Main Background" width={68} height={51} layout="intrinsic" />
      </div>
      <h1 className={styles.title}>Weather Information for {city}</h1>
      <div className={styles.headerContainer}>
        <Header {...weatherData} />
      </div>
      <Dropdown forecastData={forecastData} />
    </div>
  );
};

export default WeatherPage;