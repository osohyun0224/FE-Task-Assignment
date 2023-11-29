import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_CURRENT_WEATHER, GET_FORECAST } from '../graphql/queries';
import Header from "../components/Header";
import Image from "next/image";
import styles from "./Seoul.module.css";
import Dropdown from "../components/Dropdown";

export default function Seoul() {
  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useQuery(GET_CURRENT_WEATHER, { variables: { city: 'Seoul' } });

  const {
    data: forecastData,
    loading: forecastLoading,
    error: forecastError,
  } = useQuery(GET_FORECAST, { variables: { city: 'Seoul' } });

  if (weatherLoading || forecastLoading) return <p>Loading...</p>;
  if (weatherError) return <p>Error in weather data: {weatherError.message}</p>;
  if (forecastError) return <p>Error in forecast data: {forecastError.message}</p>;

  const currentWeather = weatherData?.getCurrentWeather;
  const forecast = forecastData?.getForecast;

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
        <Header {...currentWeather} />
      </div>
      <Dropdown forecastData={forecast} />
    </div>
  );
}
