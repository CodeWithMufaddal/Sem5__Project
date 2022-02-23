import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer, { initialState } from "./Context/reducer";
import { StateProvider } from "./Context/StateProvider";
import AlertState from './Context/AlertState';
import ProductState from './Context/ProductState';
import AddressState from './Context/AddressState';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AlertState>
        <ProductState>
          <AddressState>
            <Router>
              <App />
            </Router>
          </AddressState>
        </ProductState>
      </AlertState>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
