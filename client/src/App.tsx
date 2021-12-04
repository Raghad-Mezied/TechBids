import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import BtnSocket from './pages/sockit.io';
import { ProvideAuth } from './context/useAuth';
import theme from './theme';
import SignIn from './pages/SignIn';

const App : React.FC = () => (
  <div>
    <BtnSocket />
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/*" element={<div>No Place like home</div>} />
            <Route path="/signin*" element={<SignIn />} />
            <Route path="/signup*" element={<div>signup</div>} />
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ProvideAuth>

  </div>
);

export default App;
