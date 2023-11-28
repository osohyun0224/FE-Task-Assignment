import Header from '../components/Header';
import Image from 'next/image';
import styles from './Seoul.module.css';

export default function Seoul() {
  const weatherData = {
    date: 'May 23. 03:00am',
    location: 'Seoul, KR',
    population: '10000000',
    temperature: '292.98',
    feekslike:'Feels like 291.91℃ clear sky 풍속 3.33m/s 습도 34%',
  };
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

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
    </div>
  );  
}

