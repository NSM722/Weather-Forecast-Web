/* eslint-disable react/prop-types */
import moment from 'moment';
function LocalStorageItem({ forecastItem, weatherData }) {
  return (
    <>
      <p className='display-6 fw-bold text-success'>
        {weatherData?.city?.name}--{weatherData?.city?.country}
      </p>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {forecastItem?.[0]?.list.map((element) => (
          <div className='col' key={element.dt}>
            <div className='card border-3 border border-success'>
              <img
                src={`http://openweathermap.org/img/w/${element.weather?.[0]?.icon}.png`}
                className='card-img-top'
                alt={`${element.weather?.[0]?.icon}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: '30%',
                  alignSelf: 'center',
                }}
              />
              <div className='card-body'>
                <h5 className='card-title text-primary'>
                  Day:&nbsp;{moment(element.dt * 1000).format('DD MMM YYYY')}{' '}
                </h5>
                <p className='card-text'>Temp: {element.temp?.max}° celsius</p>
                <p className='card-text'>Humidity: {element.humidity}%</p>
                <p className='card-text'>Wind speed: {element.speed}</p>
                <p className='card-text'>Clouds: {element.clouds} </p>
                <p className='card-text'>
                  <small className='text-muted text-truncate'>
                    Description: {element.weather?.[0]?.description}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LocalStorageItem;
