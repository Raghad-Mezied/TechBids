/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnack } from '../../../context/useSnack';
import ProductCard from '../ProductCard';

interface lastAuction {
  image: string,
  name: string,
  description: string,
  auc_amount: number,
  is_open : boolean,
  end_date: any

}

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
    <div className="container-last-auctions">
      <h2>
        LATEST ACTIONS
      </h2>
      <div>
        {lastAuctions.map((ele:lastAuction) => (
          <ProductCard
            image={ele.image}
            description={ele.description}
            title={ele.name}
            price={ele.auc_amount}
            closed={ele.is_open}
            endTime={ele.end_date}
          />
        ))}
      </div>
    </div>
  );
};
export default LastAuction;
