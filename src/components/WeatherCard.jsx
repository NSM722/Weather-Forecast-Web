/* eslint-disable react/prop-types */
import moment from 'moment';
function WeatherCard({ foreCast }) {
  return (
    <div className='card-group m-4'>
      {foreCast?.map((item) => (
        <div className='card mb-3 w-50' key={item.dt}>
          <img
            src={`http://openweathermap.org/img/w/${item.weather?.[0]?.icon}.png`}
            className='card-img-top'
            alt={`${item.weather?.[0]?.icon}`}
            style={{ maxWidth: '100%', height: 'auto', width: '33%', alignSelf: 'center' }}
          />
          <div className='card-body'>
            <h5 className='card-title text-primary'>
              Day:&nbsp;{moment(item.dt * 1000).format('DD MMM YYYY')}{' '}
            </h5>
            <p className='card-text'>Temp: {item.temp?.max}° celsius</p>
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
