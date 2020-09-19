import React from 'react';

const Chat = ({ vdref }) => {
  return (
    <div
      style={{
        margin: '10px',
        backgroundColor: '#F7F7F7',
        borderRadius: '8px',
        height: '76vh',
        border: '1px solid #cccccc',
      }}
    >
      <video
        ref={vdref}
        style={{ width: '100%', height: '100%', backgroundColor: '#cbcbcb' }}
      ></video>
    </div>
  );
};

export default Chat;
