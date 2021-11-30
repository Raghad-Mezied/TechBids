/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { io } from 'socket.io-client';

// import { useParams } from 'react-router-dom';

const socket = io('http://localhost:7000');

const BtnSocket:React.FC = () => {
  const [priceBids, setPriceBids] = useState<number>(50);

  // const handleChange = (e:any) : any => {
  //   setPriceBids(e.target.value);
  // };
  // const { productId } = useParams();

  socket.emit('joinRoom', 1);

  const sendPrice = async () => {
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
    }
  };

  return (

    <div>
      <button
        type="button"
        onClick={() => {
          console.log(priceBids);
          setPriceBids(priceBids + 50);
        }}
      >
        50$

      </button>
      <div>{priceBids}</div>
    </div>
  );
};

export default BtnSocket;
