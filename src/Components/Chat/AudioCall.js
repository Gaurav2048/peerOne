import React from 'react';
import phone from '../../assets/call.png';

const AudioCall = () => {
  return (
    <div>
      <img
        src={phone}
        style={{
          width: '20px',
          height: '20px',
          marginLeft: '15px',
          marginRight: '15px',
        }}
      />
    </div>
  );
};

export default AudioCall;
