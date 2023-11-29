const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Weather {
    date: String
    location: String
    temperature: Float
    feelsLike: Float
    description: String
    windSpeed: Float
    humidity: Int
  }

  type Forecast {
    date: String
    temperature: Float
    description: String
  }

  type Query {
    getCurrentWeather(city: String!): Weather
    getForecast(city: String!): [Forecast]
  }
`;

module.exports = typeDefs;
