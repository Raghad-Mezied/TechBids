import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { format } from 'date-fns';
import { useAuth } from '../../context/useAuth';

// import { useParams } from 'react-router-dom';

const socket = io('http://localhost:7000');

const BtnSocket:React.FC = () => {
  const [priceBids, setPriceBids] = useState<number>(50);
  const { user } = useAuth();

  // const { productId } = useParams();

  socket.emit('joinRoom', 1);

  const sendPrice:any = async () => {
    if (priceBids !== undefined || !priceBids) {
      const priceData = {
        user_id: user.id,
        room: 1, // productId
        amount: priceBids,
        date: format(new Date(Date.now()), 'yyyy-MM-dd HH:mm:ss')
        ,
      };
      await socket.emit('sendPrice', priceData);
    }
  };

  useEffect(() => {
    socket.on('receivePrice', (data) => {
      console.log(data);
      setPriceBids(data.price);
    });
  }, [socket]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          sendPrice();
        }}
      >
        50$
      </button>
      <div>{priceBids}</div>
    </div>
  );
};

export default BtnSocket;
