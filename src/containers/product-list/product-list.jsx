import React from 'react';

import { ProductItem } from '../../components/product-item/product-item';

import './product-list.scss';

const ProductList = () => {
  return (
    <section className="main-container">
      <div className="ProductList">
        <ProductItem />
      </div>
    </section>
  );
};

export { ProductList };
