export interface WeatherLocation {
  id: number;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  temperature: number;
  weather_description: string;
  humidity: number;
  wind_speed: number;
  forecast: [
    {
      date: string;
      temperature: number;
      weather_description: string;
      humidity: number;
      wind_speed: number;
    }
  ];
}
