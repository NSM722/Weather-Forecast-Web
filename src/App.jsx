// React
import { useState, useEffect } from 'react';
import { Online, Offline } from 'react-detect-offline';

// Components
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import ErrorMessage from './components/ErrorMessage';
import LocalStorageItemCard from './components/LocalStorageItemCard';
// import CityImage from './components/CityImage';

// Styles
import './App.css';

// constants
const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast/daily`;
const API_KEY = `72791e8fd263ad40dd48dd074e454dbb`;
const FORECAST_DAYS = 3;
const storedForecastItem = JSON.parse(localStorage.getItem('forecastItem'));

function App() {
  // States
  const [weatherData, setWeatherData] = useState([]);
  const [forecastItem, setForecastItem] = useState(storedForecastItem);
  const [city, setCity] = useState(null || forecastItem?.[0].city?.name);
  const [error, setError] = useState(null);

  // const [cityImage, setCityImage] = useState([]);
  // const [isLoadingImage, setIsLoadingImage] = useState(false);
  // const imageSrc = cityImage?.[0]?.image?.web;

  // Hooks
  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (city) {
  //     fetchCityImage();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [city]);

  // Fetching weather data for 3 days
  function fetchWeatherData() {
    if (!city) {
      setError('Please enter a city name to get the weather forecast');
      return;
    } else {
      fetch(
        `${BASE_WEATHER_URL}?q=${city}&cnt=${FORECAST_DAYS}&units=metric&cnt=3&appid=${API_KEY}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `Failed to fetch weather details: ${res.statusText}`
            );
          }
          return res.json();
        })
        .then((data) => {
          let newData = [];
          const fetchedPlace = {
            place: city,
            ...data,
          };
          newData.unshift(fetchedPlace);
          setWeatherData((prevState) => [...prevState, ...newData]);
          // localStorage.setItem('forecastItem', JSON.stringify([data]));
          setError(null);
        })
        .catch((err) => {
          setError(
            `Failed to load the data. Kindly check your internet connection!--${err}`
          );
        });
    }
  }

  // function fetchCityImage() {
  //   setIsLoadingImage(true);
  //   fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCityImage(data.photos);
  //       setIsLoadingImage(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setIsLoadingImage(false);
  //     });
  // }

  // Event handlers
  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // fetchCityImage();
    fetchWeatherData();
    setCity('');
  }

  return (
    <>
      <Header />
      <SearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={city}
      />
      {!error && weatherData.length && (
        <Online>
          <WeatherList weatherData={weatherData} />
        </Online>
      )}

      {error && (
        <Online>
          <ErrorMessage error={error} />
        </Online>
      )}
      {/* <Offline>
        <LocalStorageItemCard
          forecastItem={forecastItem}
          weatherData={weatherData}
        />
      </Offline> */}
    </>
  );
}

export default App;
