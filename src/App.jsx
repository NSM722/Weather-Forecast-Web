// React
import { useState, useEffect } from 'react';

// Components
import SearchInput from './components/SearchInput';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

// Styles
import './App.css';

// constants
const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast/daily`;
const API_KEY = `72791e8fd263ad40dd48dd074e454dbb`;
const FORECAST_DAYS = 3;

function App() {
  // State
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [cityImage, setCityImage] = useState([]);
  const [foreCast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const imageSrc = cityImage?.[0]?.image?.web;

  // Hooks
  useEffect(() => {
    fetchWeatherData();
    fetchCityImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetching API data
  function fetchWeatherData() {
    fetch(
      `${BASE_WEATHER_URL}?q=${city}&cnt=${FORECAST_DAYS}&units=metric&cnt=3&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch weather details: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
        setForecast(data?.list);
        setError(null);
      })
      .catch((err) => {
        setError(
          `Failed to load the data. Kindly check your internet connection!--${err}`
        );
      });
  }

  function fetchCityImage() {
    fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
      .then((res) => res.json())
      .then((data) => {
        setCityImage(data.photos);
      })
      .catch((err) => console.error(err));
  }

  // Event handlers
  function handleChange(event) {
    setCity(event.target.value);
    fetchCityImage()
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData();
  }

  console.log('image-->', cityImage);

  return (
    <>
      <Header />
      <SearchInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={city}
      />
      {error && !weatherData && !foreCast ? (
        <ErrorMessage error={error} />
      ) : (
        <WeatherCard foreCast={foreCast} weatherData={weatherData} />
      )}
      <div>
        <img
          src={imageSrc}
          alt={`${city}`}
          className={`img-fluid`}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
}

export default App;
