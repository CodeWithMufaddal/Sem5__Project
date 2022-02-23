import './App.css';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import ForgotPass from './components/Auth/ForgotPass';
import Register from './components/Auth/Register';
import {
  Routes,
  Route
} from "react-router-dom";
import Alert from './/components/Home/Alert';

import Checkout from './components/Checkout/Checkout';
import Cart from './components/Product/Cart';
import Profile from './components/Admin/Profile';
import OrderHistory from './components/OrderHistory/OrderHistory';
import { ProductContext } from './Context/Context';
import { AddressContext } from './Context/Context';

import React, { useEffect, useContext } from 'react';

import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-hooks';







function App() {
  const { profile } = useContext(ProductContext)
  const { FetchAddress } = useContext(AddressContext);

  const apiKey = process.env.REACT_APP_ALGOLIA_API_KEY;
  const appId = process.env.REACT_APP_ALGOLIA_APP_ID;
  const indexName = process.env.REACT_APP_ALGOLIA_INDEX_NAME

  const searchClient = algoliasearch(appId, apiKey);
  useEffect( () => {
     profile();
     FetchAddress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName} suppressExperimentalWarning>
      <div className="App" >
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/ForgotPassword" element={<ForgotPass />} />
          <Route exact path="/register" element={< Register />} />

          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/orderHistory" element={<OrderHistory />} />

        </Routes>
      </div>
    </InstantSearch>

  );
}



export default App;
