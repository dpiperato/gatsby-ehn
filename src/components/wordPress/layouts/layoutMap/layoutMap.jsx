import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React from 'react';

import Styles from './layoutMap.styles';

export const MapMarker = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const LayoutMap = ({ map, className }) => {
  const zoom = parseInt(map.map.zoom);

  return (
    <Styles className={className} height={map.height ? map.height : '33'}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={{
          lat: map.map.latitude,
          lng: map.map.longitude,
        }}
        defaultZoom={zoom}
      >
        <MapMarker />
      </GoogleMapReact>
    </Styles>
  );
};

LayoutMap.propTypes = {
  map: PropTypes.object.isRequired,
  className: PropTypes.string,
};

LayoutMap.defaultProps = {
  className: ``,
};

export default LayoutMap;
