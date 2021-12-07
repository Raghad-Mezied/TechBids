import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ProvideAuth } from './context/useAuth';
import ProductDetails from './pages/ProductDetails';
import Header from './Components/Header';
import theme from './theme';
import NavBar from './Components/Common/NavBar';
import SignIn from './pages/SignIn';
import HistoryProduct from './Components/HistoryProduct';
import SignUp from './pages/SignUp';
import BtnSocket from './pages/socket.io';
import Bids from './pages/Bids';

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
                  <div>No Place like home</div>
                  <BtnSocket />
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
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </ThemeProvider>
      </ProvideAuth>
    </Router>

  </div>
);

export default App;
