import React from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  const addToCart = (product) => {
    setState({ ...state, cart: [...state.cart, product] });
  };

  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== product.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export { useInitialState };
