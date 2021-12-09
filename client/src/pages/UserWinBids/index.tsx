import React, { useState, useEffect } from 'react';
import {
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useSnack } from '../../context/useSnack';
import NavBar from '../../Components/Common/NavBar';

const UserWinBids : React.FC = () => {
  const [winBids, setWinBids] = useState(null);
  const { showSnack } = useSnack();
  console.log(winBids);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getWinBids = async (): Promise<void> => {
      try {
        const result = await axios.get('/api/user/win');
        if (result && result.data) {
          setWinBids(result.data.data);
        }
      } catch (err: any) {
        showSnack(err.response.data.message, 'error');
      }
    };
    getWinBids();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <NavBar />
      <Typography>Win Bids</Typography>
    </>
  );
};

export default UserWinBids;
