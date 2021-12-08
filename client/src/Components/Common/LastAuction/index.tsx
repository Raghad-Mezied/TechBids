/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnack } from '../../../context/useSnack';

const LastAuction:React.FC = () => {
  const [lastAuctions, setLastAuctions] = useState([]);
  const { showSnack } = useSnack();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchLastAuctions = async ():Promise<void> => {
      try {
        const result:any = await axios.get('/api/latest/auction');
        setLastAuctions(result.data.last3Auction);
      } catch (err : any) {
        showSnack(err.response.data.message, 'error');
      }
    };
    fetchLastAuctions();
    console.log(lastAuctions);
    return () => {
      source.cancel();
    };
  }, []);

  return (

    <div>
      {JSON.stringify(lastAuctions)}
    </div>
  );
};

export default LastAuction;
