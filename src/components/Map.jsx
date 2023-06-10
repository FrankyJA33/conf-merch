import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import { config } from '../config/index';

function Map({data}){
  const mapStyles = {
    width: '100%',
    height: '50vh'
  }

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  }

  return (
    <LoadScript googleMapsApiKey={config.googleMapsAPIKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  )
}

export {Map};