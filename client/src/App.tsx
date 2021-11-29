import React from 'react';
import './App.css';
import BidsDetailsCheckBox from './pages/BidsDetailsCheckBox';
import BidsDetailsPriceBar from './pages/BidsDetailsPriceBar';
import BidsDetailsSelect from './pages/BidsDetailsSelect';

const App : React.FC = () => (
  <div className="App">
    <BidsDetailsSelect value="hello" text="hapepe" item={['Mobile', 'Computers', ' Gaming']} />
    <BidsDetailsPriceBar />
    <BidsDetailsCheckBox />
  </div>
);

export default App;
