import React, { useState } from 'react';
import { io } from 'socket.io-client';

// import { useParams } from 'react-router-dom';

const socket = io('http://localhost:3000');

const BtnSocket:React.FC = () => {
  const [priceBids, setPriceBids] = useState<number>(50);

  // const handleChange = (e:any) : any => {
  //   setPriceBids(e.target.value);
  // };
  // const { productId } = useParams();

  socket.emit('joinRoom', '1');

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
