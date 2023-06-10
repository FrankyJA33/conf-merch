//! https://developers.google.com/maps/documentation/geocoding/get-api-key?hl=es-419
import React, { useState } from 'react';
import axios from 'axios';

function useGoogleAddress(address){
  const [map, setMap] = useState({lat: 0, lng: 0});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDJp7kRNm1137arLY2Nqph4-ZUP6kla3uI`;

  React.useEffect(() => {
    async function handler(){
      const response = await axios(API);
      setMap(response.data?.results[0]?.geometry?.location);
    }
    handler();
  }, []);
  
  return map;
}

export {useGoogleAddress};