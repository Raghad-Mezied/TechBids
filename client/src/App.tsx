/* eslint-disable react/button-has-type */
import React from 'react';
import './App.css';
import { VariantType, useSnackbar } from 'notistack';

const App : React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handelMessage = (message: string, variant?: VariantType) : void => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <div className="App">
      hello world
      <button onClick={() : void => { handelMessage('Hello World :)', 'success'); }}>test</button>
    </div>
  );
};

export default App;
