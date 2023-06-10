import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import {useGoogleAddress} from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success() {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  const locationAddress = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={locationAddress}/>
        </div>
      </div>
    </div>
  );
}

export {Success};