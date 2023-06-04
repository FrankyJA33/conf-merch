import React from 'react';
import {Link} from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import '../styles/components/Header.css';

function Header(){
  return (
    <div className="Header">
      <h1 className='Header-title'>
        <Link to='/'>Platzi Conf Merch</Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <BiCart className='Header-icon'/>
        </Link>
      </div>
    </div>
  );
}

export {Header};