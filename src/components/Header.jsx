import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import '../styles/components/Header.css';
import { AppContext } from '../context/AppContext';

function Header(){
  const {state} = useContext(AppContext);
  const {cart} = state;

  return (
    <div className="Header">
      <h1 className='Header-title'>
        <Link to='/'>Platzi Conf Merch</Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <BiCart className='Header-icon'/>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
}

export {Header};