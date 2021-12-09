/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Typography, Button,
} from '@mui/material';
import axios from 'axios';
import { useSnack } from '../../context/useSnack';
import NavBar from '../../Components/Common/NavBar';
import Footer from '../../Components/Common/Footer';
import AddProductModal from '../../Components/AddProductModal';

const UserProducts : React.FC = () => {
  const [products, setProducts] = useState(null);
  const [open, setOpen] = useState(false);
  const { showSnack } = useSnack();
  console.log(products);
  // const productList = products && products.map((product) => );

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
      <AddProductModal open={open} setOpen={setOpen} />
      <NavBar />
      <div style={{ width: '1000px', margin: '9rem auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
        }}
        >
          <Typography variant="h4">My Products</Typography>
          <Button
            variant="contained"
            type="button"
            onClick={() => setOpen(true)}
            sx={{ mb: 2, mt: 2 }}
          >
            Add Product
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProducts;
