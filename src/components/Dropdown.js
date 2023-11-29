import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";

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
    const today = new Date();
    const uniqueDates = [];

    forecast.forEach((item) => {
      const forecastDate = new Date(item.dt_txt);
      if (forecastDate > today) {
        const formattedDate = forecastDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });

        if (!uniqueDates.includes(formattedDate)) {
          uniqueDates.push(formattedDate);
        }
      }
    });

    return uniqueDates.slice(0, 5);
  };

  const formattedDates = getUniqueDates(forecastData);

  return (
    <section className={styles.dropdownContainer}>
      <header className={styles.header}>
        <h2>5-day Forecast</h2>
      </header>
      <div className={styles.items}>
        {formattedDates.map((date, index) => (
          <React.Fragment key={index}>
            <article className={styles.item} onClick={() => toggleDropdown(index)}>
              <time className={styles.date}>{date}</time>
              <div className={styles.toggleButton}>
                <Image
                  src={openIndex === index ? "/image/DownIcons.png" : "/image/UpIcons.png"}
                  alt="Toggle Icon"
                  width={24}
                  height={24}
                />
              </div>
            </article>
            {openIndex === index &&
              forecastData
                .filter((item) => {
                  const itemDate = new Date(item.dt_txt);
                  return itemDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) === date;
                })
                .map((weather, idx) => (
                  <div key={idx} className={styles.dropdownContent}>
                    <Image
                      src={weather.weatherIconUrl}
                      alt="Weather Icon"
                      width={60}
                      height={60}
                      className={styles.weatherIcon}
                    />
                    <div className={styles.time}>
                      {new Date(weather.dt_txt).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }).toLowerCase()}
                    </div>
                    <div className={styles.weatherText}>{weather.weather[0].description}</div>
                    <div className={styles.temperature}>{`${weather.main.temp.toFixed(1)}℃`}</div>
                  </div>
                ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default DropdownComponent;
