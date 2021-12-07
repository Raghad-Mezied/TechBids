import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ProvideAuth } from './context/useAuth';
import Header from './Components/Header';
import theme from './theme';
import NavBar from './Components/Common/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Bids from './pages/Bids';
import './App.css';

const App : React.FC = () => (
  <div>
    <Router>
      <ProvideAuth>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/*"
              element={(
                <div>
                  <NavBar />
                  <Header />
                </div>
              )}
            />
            <Route
              path="/bids*"
              element={(
                <>
                  <NavBar />
                  <Bids />
                </>
)}
            />
            <Route path="/signin*" element={<SignIn />} />
            <Route path="/signup*" element={<SignUp />} />
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </ThemeProvider>
      </ProvideAuth>
    </Router>

  </div>
);

export default App;
