import React from 'react';

// http://developers.teleport.org/api/getting_started/#photos_ua

function CityImage({ loadingImage, imageSrc, city }) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <p className='display-3 fw-bold text-secondary-emphasis'>
        {city.toUpperCase()}
      </p>
      <img
        src={imageSrc}
        alt={`${city}`}
        className={`img-fluid rounded`}
        style={{ maxWidth: '100%', height: 'auto', width: '60%' }}
      />
    </div>
  );
}

export default CityImage;
