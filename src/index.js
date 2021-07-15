import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import RestoService from './servises/restoService';
import RestoServiceContext from './components/resto-service-context';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import './main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const restoService = new RestoService();

ReactDOM.render(
  <Provider store={store}>
    <RestoServiceContext.Provider value={restoService}>
      <Router>
        <App />
      </Router>
    </RestoServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
