import React, { useState, useEffect } from 'react';
import {
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useSnack } from '../../context/useSnack';
import NavBar from '../../Components/Common/NavBar';

const UserWinBids : React.FC = () => {
  const [enteredBids, setEnteredBids] = useState(null);
  const { showSnack } = useSnack();
  console.log(enteredBids);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getEnteredBids = async (): Promise<void> => {
      try {
        const result = await axios.get('/api/user/bids');
        if (result && result.data) {
          setEnteredBids(result.data.data);
        }
      } catch (err: any) {
        showSnack(err.response.data.message, 'error');
      }
    };
    getEnteredBids();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <NavBar />
      <Typography>Entered Bids</Typography>
    </>
  );
};

export default UserWinBids;
