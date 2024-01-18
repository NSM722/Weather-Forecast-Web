/* eslint-disable react/prop-types */
import moment from 'moment';
function WeatherCard({ forecast, weatherData }) {
  // maximum temperature
  const maxTemps = forecast?.map((day) => day.temp.max);
  let maxTemp = Math.max(...maxTemps).toFixed(2);

  // minimum temperature
  const minTemps = forecast?.map((day) => day.temp.min);
  let minTemp = Math.min(...minTemps).toFixed(2);

  return (
    <>
      <p className='display-6 fw-bold text-success'>
        {weatherData?.city?.name}--{weatherData?.city?.country}
      </p>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {forecast?.map((item) => (
          <div className='col' key={item.dt}>
            <div className='card border-3 border border-success'>
              <img
                src={`http://openweathermap.org/img/w/${item.weather?.[0]?.icon}.png`}
                className='card-img-top'
                alt={`${item.weather?.[0]?.icon}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: '30%',
                  alignSelf: 'center',
                }}
              />
              <div className='card-body'>
                <h5 className='card-title text-primary'>
                  Day:&nbsp;{moment(item.dt * 1000).format('DD MMM YYYY')}{' '}
                </h5>
                <p
                  className={`card-text ${
                    item.temp?.min.toFixed(2) === minTemp &&
                    `text-bg-danger rounded-pill`
                  }`}
                >
                  Low: {item.temp?.min}° celsius
                </p>
                <p
                  className={`card-text ${
                    item.temp?.max.toFixed(2) === maxTemp &&
                    `text-bg-warning rounded-pill`
                  }`}
                >
                  High: {item.temp?.max}° celsius
                </p>
                <p className='card-text'>Humidity: {item.humidity}%</p>
                <p className='card-text'>Wind speed: {item.speed}</p>
                <p className='card-text'>Clouds: {item.clouds} </p>
                <p className='card-text'>
                  <small className='text-muted'>
                    Description: {item.weather?.[0]?.description}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
        <button
          className='btn btn-outline-danger'
          onClick={() => console.log('delete button clicked')}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
}

export default WeatherCard;
