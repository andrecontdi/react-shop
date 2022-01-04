import React, { useContext } from 'react';

import { AppContext } from '../../context/app-context';

import './order-item.scss';

const OrderItem = ({ item }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={item.images[0]} alt="bike" />
      </figure>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <img
        src="./icons/icon_close.png"
        alt="close"
        onClick={() => removeFromCart(item)}
      />
    </div>
  );
};

export { OrderItem };
