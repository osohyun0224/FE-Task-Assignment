import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import Image from 'next/image';

const DropdownComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const dates = ["May 24", "May 25", "May 26", "May 27", "May 28"];

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.header}>
        <h2>5-day Forecast</h2>
      </div>
      <div className={styles.items}>
        {dates.map((date, index) => (
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
            {openIndex === index && (
              <div className={styles.dropdownContent}>
                <Image
                  src="/public/image/WeatherIcons.png"
                  alt="Weather Icon"
                  width={60}
                  height={60}
                  className={styles.weatherIcon}
                />
                <div className={styles.time}>12:00 PM</div>
                <div className={styles.weatherText}>clear sky</div>
                <div className={styles.temperature}>22℃</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DropdownComponent;
