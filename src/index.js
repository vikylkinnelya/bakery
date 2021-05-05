import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import RestoService from './servises/restoService';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import './main.css'

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <RestoServiceContext.Provider value={RestoService}>
        <Router>
          <App />
        </Router>
      </RestoServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
