import styles from './page.module.css';
import Button from '../components/Button'

export default function Main() {
  const cities = ['Seoul', 'Tokyo', 'Paris', 'London'];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.welcome}>Welcome to</span>
        <span className={styles.appName}>Weather App!</span>
      </h1>
      <p className={styles.description}>
        Choose a city from the list below to check the weather.
      </p>
      <div className={styles.buttonsContainer}>
        {cities.map(city => <Button key={city} text={city} />)}
      </div>
    </main>
  );
}