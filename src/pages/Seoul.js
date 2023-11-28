import Header from '../components/Header';
import Image from 'next/image';
import styles from './Seoul.module.css';

export default function Seoul() {
  const weatherData = {
    date: 'May 23. 03:00am',
    location: 'Seoul, KR',
    population: '10000000',
    temperature: '292.98'
  };

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

