import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AlertState from './Context/alert/AlertState';
import reducer, { initialState } from "./Context/state/reducer";
import { StateProvider } from "./Context/state/StateProvider";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AlertState>
        <Router>
          <App />
        </Router>
      </AlertState>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
