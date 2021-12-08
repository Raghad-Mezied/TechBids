/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnack } from '../../../context/useSnack';
import ProductCard from '../ProductCard';

const LastAuction:React.FC = () => {
  const [lastAuctions, setLastAuctions] = useState([]);
  const { showSnack } = useSnack();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchLastAuctions = async ():Promise<void> => {
      try {
        const result:any = await axios.get('/api/latest/auction');
        setLastAuctions(result.data.last3Auction);
        console.log(result.data.last3Auction);
      } catch (err : any) {
        showSnack(err.response.data.message, 'error');
      }
    };
    fetchLastAuctions();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    // <div>
    //   {lastAuctions.map((ele):any => (
    //     <ProductCard image={ele.image} description={ele.description}
    // title={ele.} price={ele.} closed={ele.} endTime={ele.}/>
    //   ))}
    // </div>
    <>
      hello
    </>
  );
};

export default LastAuction;
