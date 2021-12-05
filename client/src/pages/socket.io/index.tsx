import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { format } from 'date-fns';
import axios from 'axios';
import { useAuth } from '../../context/useAuth';
import { useSnack } from '../../context/useSnack';

// import { useParams } from 'react-router-dom';

const socket = io('http://localhost:7000');

const BtnSocket:React.FC = () => {
  const [priceBids, setPriceBids] = useState<number>(50);
  const { user } = useAuth();

  const { showSnack } = useSnack();

  // const { productId } = useParams();

  socket.emit('joinRoom', 2);

  const sendPrice:any = async () => {
    if (priceBids !== undefined || !priceBids) {
      const priceData = {
        user_id: user.id,
        room: 2, // productId
        amount: priceBids,
        date: format(new Date(Date.now()), 'yyyy-MM-dd HH:mm:ss')
        ,
      };
      await socket.emit('sendPrice', priceData);
    }
  };

  const getProduct = async ():Promise<any> => {
    try {
      const getProductData = await axios.get('/api/product/2');
      setPriceBids(getProductData.data.data.auc_amount);
    } catch (err: any) {
      showSnack(err.response.data.message, 'error');
    }
  };

  useEffect(() => {
    getProduct();
    socket.on('receivePrice', (data) => {
      setPriceBids(data.amount);
    });
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          sendPrice();
          getProduct();
        }}
      >
        50$
      </button>
      <div>{priceBids}</div>
    </div>
  );
};

export default BtnSocket;
