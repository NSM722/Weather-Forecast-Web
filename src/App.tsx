// React
import { useState, useEffect, SetStateAction } from 'react';
import { Online, Offline } from 'react-detect-offline';

// Components
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import ErrorMessage from './components/ErrorMessage';
import LocalStorageList from './components/LocalStorageList';
// import CityImage from './components/CityImage';

// Types

// Styles
import './App.css';
import { IWeatherData } from './interfaces/interfaces';

// constants
const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast/daily`;
const API_KEY = `72791e8fd263ad40dd48dd074e454dbb`;
const FORECAST_DAYS = 3;
const storedForecastData = JSON.parse(
  localStorage.getItem('storageItems') as string
);

function App() {
  // States
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);
  const [storedItems] = useState<IWeatherData[]>(storedForecastData);
  // const [city, setCity] = useState(null || storedItems?.[0].place);
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<null | string>(null);

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
          let newData: any[] = [];
          const fetchedPlace = {
            place: city,
            ...data,
          };
          newData.unshift(fetchedPlace);
          setWeatherData((prevState) => [...prevState, ...newData]);
          localStorage.setItem(
            'storageItems',
            JSON.stringify([...weatherData, ...newData])
          );
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
  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setCity(event.target.value);
  }

  function handleDelete(id: string) {
    setWeatherData(weatherData.filter((elem) => elem.place !== id));
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    // fetchCityImage();
    fetchWeatherData();
    // clear the search input
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
          <WeatherList weatherData={weatherData} handleDelete={handleDelete} />
        </Online>
      )}

      {error && (
        <Online>
          <ErrorMessage error={error} />
        </Online>
      )}
      {!weatherData.length && !error && (
        <Online>
          <p className='text-secondary fw-bolder'>
            Enter a city name to get weather details
          </p>
        </Online>
      )}
      <Offline>
        <LocalStorageList storageData={storedItems} />
      </Offline>
    </>
  );
}

export default App;
