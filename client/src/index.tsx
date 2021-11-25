import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProvideSnack } from './context/useSnack';

ReactDOM.render(
  <ProvideSnack>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProvideSnack>,
  document.getElementById('root'),
);
