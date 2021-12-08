import React, { useState, useEffect } from 'react';
import {
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useSnack } from '../../context/useSnack';
import NavBar from '../../Components/Common/NavBar';

const UserProducts : React.FC = () => {
  const [products, setProducts] = useState(null);
  const { showSnack } = useSnack();
  console.log(products);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getProducts = async (): Promise<void> => {
      try {
        const result = await axios.get('/api/user/products');
        if (result && result.data) {
          setProducts(result.data.data);
        }
      } catch (err: any) {
        showSnack(err.response.data.message, 'error');
      }
    };
    getProducts();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <NavBar />
      <Typography>products</Typography>
    </>
  );
};

export default UserProducts;
