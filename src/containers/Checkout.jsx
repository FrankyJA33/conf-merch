import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { BsTrash } from "react-icons/bs";
import '../styles/components/Checkout.css';
import { v4 as uuidv4 } from 'uuid';

function handleSumTotal(){
  const {state} = useContext(AppContext);
  const {cart} = state;
  const sum = cart.reduce((accumulator, currentV) => accumulator + currentV.price,0);
  return sum;
};

function Checkout() {
  const {state, removeFromCart} = useContext(AppContext);
  const {cart} = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de pedidios' : 'Sin pedidos'}</h3>
        {cart.map(item => (
          <div className="Checkout-item" key={uuidv4()}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
              <span>{uuidv4()}</span>
            </div>
            <button type='button' onClick={() => handleRemove(item)}><BsTrash className='Checkout-icon' /></button>
          </div>
        ))}
      </div>
      {cart.length > 0 && 
      <div className="Checkout-sidebar">
        <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
        <Link to='/checkout/information'><button type='button'>Continuar pedido</button></Link>
      </div>}
    </div>
  );
}

export {Checkout, handleSumTotal};