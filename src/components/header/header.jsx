import React from 'react';

import { Menu } from '../menu/menu';
import { MyOrder } from '../../containers/my-order/my-order';

import { AppContext } from '../../context/app-context';

import './header.scss';

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);
  const { state } = React.useContext(AppContext);

  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={() => setToggle(!toggle)}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {toggleOrders ? <MyOrder /> : null}
    </nav>
  );
};

export { Header };
