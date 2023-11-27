import Header from '../components/Header';

export default function Seoul() {
  const weatherData = {
    date: 'May 23. 03:00am',
    location: 'Seoul, KR',
    population: '10000000',
    temperature: '292.98'
  };

  return (
    <div>
      <Header {...weatherData} />
    </div>
  );
}
