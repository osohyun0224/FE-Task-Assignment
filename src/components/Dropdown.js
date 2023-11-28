import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import Image from 'next/image';

const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dates = ["May 24", "May 25", "May 26", "May 27", "May 28"];

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.header}>
        <h2>5-day Forecast</h2>
      </div>
      <div className={styles.items}>
        {dates.map((date, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.date}>{date}</div>
            <div className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
              <Image
                src={isOpen ? "/public/image/DownIcons.png" : "/public/image/UpIcons.png"}
                alt="Toggle Icon"
                width={24}
                height={24}
              />
            </div>
            {isOpen && (
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
          </div>
        ))}
      </div>
    </div>
  );
};


export default DropdownComponent;
