import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = ({ date, location, population, temperature, feelsLike }) => {
  return (
    <div className={styles.header}>
      <div className={styles.weatherIcon}>
        <Image
          src="/image/WeatherIcons.png" 
          alt="Weather Icons"
          width={80} 
          height={80}
          layout="intrinsic"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.date}>{date}</p>
        <h2 className={styles.location}>{location}</h2>
        <p className={styles.population}>{`(인구수: ${population})`}</p>
      </div>
      <div className={styles.temperature}>
        {temperature}℃
        <p className={styles.feelsLike}>{feelsLike}</p>
      </div>
    </div>
  );
};

export default Header;
