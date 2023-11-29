import { gql } from '@apollo/client';

export const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($city: String!) {
    getCurrentWeather(city: $city) {
      date
      location
      temperature
      feelsLike
      description
      windSpeed
      humidity
    }
  }
`;
