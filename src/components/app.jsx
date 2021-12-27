import React from "react";
import { Layout } from "../containers/layout";
import { Login } from "../containers/login";
import "../styles/global.css";

const App = () => {
  return (
    <Layout>
      <Login></Login>
    </Layout>
  );
};

export default App;
