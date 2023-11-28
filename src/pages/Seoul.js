import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import styles from './Seoul.module.css';
import axios from 'axios';
import Dropdown from '../components/Dropdown';

export default function Seoul() {
  const [weatherData, setWeatherData] = useState({
    date: '',
    location: '',
    population: '9776000',
    temperature: '',
    feelsLike: '',
    weatherDescription: '',
    windSpeed: '',
    humidity: '',
    weatherIconUrl: '',
  });

  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const newWeatherData = {
          date: new Date(data.dt * 1000).toLocaleString(),
          location: data.name,
          population: '9776000',
          temperature: data.main.temp.toFixed(1),
          feelsLike: `Feels like ${data.main.feels_like.toFixed(1)}℃`,
          weatherDescription: data.weather[0].description,
          windSpeed: `풍속 ${data.wind.speed} m/s`,
          humidity: `습도 ${data.main.humidity}%`,
          weatherIconUrl,
        };
        setWeatherData(newWeatherData);
      } catch (error) {
        console.error("날씨 데이터를 불러오지 못했습니다.", error);
      }
    };

    const fetchForecast = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;
      try {
        const response = await axios.get(url);
        const updatedForecast = response.data.list.map(item => ({
          ...item,
          weatherIconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
        }));
        setForecastData(updatedForecast);
      } catch (error) {
        console.error("예보 데이터를 불러오지 못했습니다.", error);
      }
    };

    fetchWeather();
    fetchForecast();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/image/img.png" 
          alt="Main Background"
          width={68} 
          height={51}
          layout="intrinsic"
        />
      </div>
      <h1 className={styles.title}>Weather Information for Seoul</h1>
      <div className={styles.headerContainer}>
        <Header {...weatherData} />
      </div>
      <Dropdown forecastData={forecastData} /> 
    </div>
  );
}
