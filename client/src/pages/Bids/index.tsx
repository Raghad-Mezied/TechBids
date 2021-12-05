import React from 'react';
import {
  Typography,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const Bids : React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <Typography>{query.get('name')}</Typography>
  );
};

export default Bids;
