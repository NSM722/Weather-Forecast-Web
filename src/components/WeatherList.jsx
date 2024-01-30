/* eslint-disable react/prop-types */
import DeleteBtn from './DeleteBtn';
import WeatherCard from './WeatherCard';

function WeatherList({ weatherData, handleDelete }) {
  return (
    <>
      {weatherData.map((elem) => {
        const maxTemps = elem.list.map((day) => day.temp.max);
        let maxTemp = Math.max(...maxTemps).toFixed(2);
        const minTemps = elem.list?.map((day) => day.temp.min);
        let minTemp = Math.min(...minTemps).toFixed(2);
        return (
          <div key={elem.place}>
            <p
              className='display-6 fw-bold text-success text-capitalize'
              key={elem.place}
            >
              {elem.place}--{elem.city.country}
            </p>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              {elem.list.map((item) => {
                return (
                  <WeatherCard
                    item={item}
                    key={item.dt}
                    maxTemp={maxTemp}
                    minTemp={minTemp}
                  />
                );
              })}
              <DeleteBtn handleDelete={() => handleDelete(elem.place)} />
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default WeatherList;
