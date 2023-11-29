import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Weather {
    date: String
    location: String
    temperature: Float
    feelsLike: Float
    description: String
    windSpeed: Float
    humidity: Int
    weatherIconUrl: String
  }

  type Query {
    getCurrentWeather(city: String!): Weather
    getForecast(city: String!): [Weather]
  }
`;
