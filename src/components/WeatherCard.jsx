/* eslint-disable react/prop-types */
import moment from 'moment';
function WeatherCard({ foreCast, weatherData }) {
  return (
    <div className='card-group m-4'>
      {foreCast?.map((item) => (
        <div className='card mb-3' key={item.dt}>
          <img
            src={`http://openweathermap.org/img/w/${item.weather?.[0]?.icon}.png`}
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            {/* location image */}
            <h5 className='card-title'>City: {weatherData?.city?.name}</h5>
            <h6 className='card-title text-primary'>
              Day:&nbsp;{moment(item.dt * 1000).format('DD MMM YYYY')}{' '}
            </h6>
            <p className='card-text'>Temp: {item.temp?.max}° celsius</p>
            <p className='card-text'>RAIN</p>
            <p className='card-text'>Wind speed: {item?.speed}</p>
            <p className='card-text'>Clouds: {item.clouds} </p>
            <p className='card-text'>
              <small className='text-muted'>
                Description: {item.weather?.[0]?.description}
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;
