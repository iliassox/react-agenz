import React from 'react'
import './styles/Map.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  position: 'fixed',
  width: '48vw',
  height: '82vh',
  bottom: '0',
  flex: '0.5',
};

const center = {
  lat: 35.169385, 
  lng: -5.262435
};

function Map() {
  return (
    <div className='map'>
      <LoadScript
        googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_KEY_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18.2}
        >
          <Marker lat={35.169319} lng={-5.263068}/>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map