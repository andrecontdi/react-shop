import React from 'react';

import { OrderItem } from '@components/order-item/order-item';
import { AppContext } from '../../context/app-context';

import './my-order.scss';

const MyOrder = () => {
  const { state } = React.useContext(AppContext);

  const calculateTotalPrice = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    return state.cart.reduce(reducer, 0);
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item) => (
          <OrderItem item={item} key={`orderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${calculateTotalPrice()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };
