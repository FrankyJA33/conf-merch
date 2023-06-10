import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import {config} from '../config/index';
import { handleSumTotal } from './Checkout';
import '../styles/components/Payment.css';

function Payment() {
  const navigate = useNavigate()
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;

  const paypalOtions = {
    clientId: config.clientIdPaypal,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data.status);
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer: buyer,
        products: cart,
        payment: data
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
}

export {Payment};