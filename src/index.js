import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import Routing from './Router/Router';
import { Provider } from "react-redux";
import configureStore from '../src/Redux/store';
import ErrorBoundariesComponent from '../src/Components/Error-Boundaries/ErrorBoundariesComponent';

ReactDOM.render(
  <ErrorBoundariesComponent>
    <Provider store={configureStore()}>
      <React.StrictMode>
        <Routing />
      </React.StrictMode>
    </Provider>
  </ErrorBoundariesComponent>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
