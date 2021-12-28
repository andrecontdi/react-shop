import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/layout/layout';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { PasswordRecovery } from '../pages/password-recovery/password-recovery';
import { SentEmail } from '../pages/sent-email/sent-email';
import { NewPassword } from '../pages/new-password/new-password';
import { MyAccount } from '../pages/my-account/my-account';
import { CreateAccount } from '../pages/create-account/create-account';
import { Checkout } from '../pages/checkout/checkout';
import { NotFound } from '../pages/not-found/not-found';

import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/sent-email" element={<SentEmail />} />
          <Route path="/new-passwordy" element={<NewPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/sign-up" element={<CreateAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
