import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import Image from 'next/image';

const DropdownComponent = ({ forecastData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const getUniqueDates = (forecast) => {
    const uniqueDates = [];
    forecast.forEach((item) => {
      const date = new Date(item.dt_txt).toDateString();
      if (uniqueDates.indexOf(date) === -1) {
        uniqueDates.push(date);
      }
    });
    return uniqueDates;
  };

  const formattedDates = getUniqueDates(forecastData);

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.header}>
        <h2>5-day Forecast</h2>
      </div>
      <div className={styles.items}>
        {formattedDates.map((date, index) => (
          <React.Fragment key={index}>
            <div className={styles.item} onClick={() => toggleDropdown(index)}>
              <div className={styles.date}>{date}</div>
              <div className={styles.toggleButton}>
                <Image
                  src={openIndex === index ? "/public/image/DownIcons.png" : "/public/image/UpIcons.png"}
                  alt="Toggle Icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            {openIndex === index && forecastData
              .filter(item => new Date(item.dt_txt).toDateString() === date)
              .map((weather, idx) => (
                <div key={idx} className={styles.dropdownContent}>
                  <Image
                    src={weather.weatherIconUrl}
                    alt="Weather Icon"
                    width={60}
                    height={60}
                    className={styles.weatherIcon}
                  />
                  <div className={styles.time}>{new Date(weather.dt_txt).toLocaleTimeString()}</div>
                  <div className={styles.weatherText}>{weather.weather[0].description}</div>
                  <div className={styles.temperature}>{`${weather.main.temp.toFixed(1)}℃`}</div>
                </div>
              ))
            }
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DropdownComponent;
