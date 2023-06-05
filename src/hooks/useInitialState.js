import React from 'react';
import initialState from '../initialState';

function useInitialState(){
  const [state, setState] = React.useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCard = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    addToCart,
    removeFromCard,
    state,
  }
}

export {useInitialState};