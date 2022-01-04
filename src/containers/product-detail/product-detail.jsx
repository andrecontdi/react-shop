import React from 'react';

import { ProductInfo } from '@components/product-info/product-info';

import './product-detail.scss';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export { ProductDetail };
