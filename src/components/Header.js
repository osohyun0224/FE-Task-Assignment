import styles from "./Header.module.css";
import Image from "next/image";

const Header = ({
  date,
  location,
  population,
  temperature,
  feelsLike,
  weatherDescription,
  windSpeed,
  humidity,
  weatherIconUrl,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.weatherIcon}>
        <Image
          src={weatherIconUrl || "/image/default-icon.png"}
          alt="Weather Icon"
          width={80}
          height={80}
          layout="intrinsic"
        />
      </div>
      <div className={styles.info}>
        <time className={styles.date}>{date}</time>
        <h2 className={styles.location}>{location}</h2>
        <p className={styles.population}>{`(인구수: ${population})`}</p>
        <p className={styles.weatherDescription}>{weatherDescription}</p>
      </div>
      <div className={styles.temperature}>
        {temperature}℃
        <div className={styles.weatherDetails}>
          <p className={styles.feelsLike}>{feelsLike}</p>
          <span>&nbsp;</span>
          <p className={styles.additionalInfo}>{windSpeed}</p>
          <span>&nbsp;</span>
          <p className={styles.additionalInfo}>{humidity}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
