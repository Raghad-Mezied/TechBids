/* eslint-disable react/button-has-type */
import React from 'react';
import './App.css';
import { useSnack } from './context/useSnack';

const App : React.FC = () => {
  const { showSnack } = useSnack();

  return (
    <div className="App">
      hello world
      <button onClick={() : void => { showSnack('Hello World :)', 'success'); }}>test</button>
    </div>
  );
};

export default App;
