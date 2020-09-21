import React from 'react';
import Send from '../assets/send.png';

const TypeArea = () => {
  return (
    <div
      style={{
        marginLeft: '10px',
        justifyContent: 'space-around',
        backgroundColor: '#f7f7f7',
        marginRight: '20px',
        border: '1px solid #cbcbcb',
        borderRadius: '19px',
        alignItems: '',
      }}
    >
      <input
        style={{
          width: '90%',
          border: '0px',
          outline: 'none',
          backgroundColor: 'transparent',
          padding: '8px',
          marginLeft: '12px',
        }}
        placeholder="Type a message here"
      />
      <img
        src={Send}
        style={{
          width: '38px',
          height: '38px',
          padding: '8px',
          borderRadius: '19px',
          backgroundColor: '#cccccc',
          marginLeft: '15px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default TypeArea;
