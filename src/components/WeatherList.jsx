/* eslint-disable react/prop-types */
import moment from 'moment';
import DeleteBtn from './DeleteBtn';
import WeatherCard from './WeatherCard';
function WeatherList({ weatherData }) {
  console.log('weatherData in WeatherList', weatherData);
  // maximum temperature
  // const maxTemps = forecast?.map((day) => day.temp.max);
  // let maxTemp = Math.max(...maxTemps).toFixed(2);

  // // minimum temperature
  // const minTemps = forecast?.map((day) => day.temp.min);
  // let minTemp = Math.min(...minTemps).toFixed(2);

  return (
    <>
      {weatherData.map((elem) => {
        return (
          <div key={elem.place}>
            <p
              className='display-6 fw-bold text-success text-capitalize'
              key={elem.place}
            >
              {elem.place}--{elem.city.country}
            </p>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              {elem.list.map((item) => (
                <WeatherCard item={item} key={item.dt} />
              ))}
            </div>
            <DeleteBtn />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default WeatherList;
