import React from 'react';
import './App.css';
import BidsDetailsSelect from './pages/BidsDetailsSelect';

const App : React.FC = () => (
  <div className="App">
    <BidsDetailsSelect text="catagories" item={['Mobile', 'Computers', ' Gaming']} />
  </div>
);

export default App;
