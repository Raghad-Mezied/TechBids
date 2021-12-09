/* eslint-disable no-unused-vars */
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
import SignUp from './pages/SignUp';
import Bids from './pages/Bids';
import UserWinBids from './pages/UserWinBids';
import UserProducts from './pages/UserProducts';
import LastAuction from './Components/Common/LastAuction';

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
                  <Header />
                  <LastAuction />
                </div>
              )}
            />

            <Route path="/user/products*" element={<UserProducts />} />
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
            <Route path="/user/win" element={<UserWinBids />} />
          </Routes>
        </ThemeProvider>
      </ProvideAuth>
    </Router>

  </div>
);

export default App;
