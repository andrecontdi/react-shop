import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@containers/layout/layout';
import { Home } from '@pages/home/home';
import { Login } from '@pages/login/login';
import { PasswordRecovery } from '@pages/password-recovery/password-recovery';
import { SentEmail } from '@pages/sent-email/sent-email';
import { NewPassword } from '@pages/new-password/new-password';
import { MyAccount } from '@pages/my-account/my-account';
import { CreateAccount } from '@pages/create-account/create-account';
import { Checkout } from '@pages/checkout/checkout';
import { Orders } from '@pages/orders/orders';
import { NotFound } from '@pages/not-found/not-found';

import { AppContext } from '../context/app-context';
import { useInitialState } from '../hooks/useInitialState';

import '../styles/global.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/sent-email" element={<SentEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
