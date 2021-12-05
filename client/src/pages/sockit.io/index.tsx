import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from '../../context/useAuth';

// import { useParams } from 'react-router-dom';

const socket = io('http://localhost:7000');

const BtnSocket:React.FC = () => {
  const [priceBids, setPriceBids] = useState<number>(50);
  const { user } = useAuth();
  console.log(user?.name);

  // const handleChange = (e:any) : any => {
  //   setPriceBids(e.target.value);
  // };
  // const { productId } = useParams();

  socket.emit('joinRoom', 1);

  const sendPrice:any = async () => {
    if (priceBids !== undefined || !priceBids) {
      const priceData = {
        room: 1, // productId
        price: priceBids,
        time:
        `${new Date(Date.now()).getHours()
        }:${
          new Date(Date.now()).getMinutes()
        }:${
          new Date(Date.now()).getSeconds()}`,
      };
      await socket.emit('sendPrice', priceData);
    }
  };

  useEffect(() => {
    socket.on('receivePrice', (data) => {
      setPriceBids(data.price);
    });
  }, [socket]);

  return (

    <div>
      <button
        type="button"
        onClick={() => {
          setPriceBids(priceBids + 50);
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
