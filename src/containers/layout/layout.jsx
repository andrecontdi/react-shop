import React from 'react';

import { Header } from '../../components/header/header';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
