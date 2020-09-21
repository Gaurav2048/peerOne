import React, { useState } from 'react';

const ChatHead = ({ user, onClick }) => {
  const [mouseEnter, set] = useState(false);
  return (
    <div
      style={{
        paddingTop: '7px',
        paddingBottom: '7px',
        backgroundColor: mouseEnter ? '#cbcbcb' : '#f7f7f7',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #dddddd ',
        cursor: 'pointer',
      }}
      onClick={(e) => onClick(user)}
      onMouseEnter={(e) => set(true)}
      onMouseLeave={(e) => set(false)}
    >
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '24px',
            objectPosition: 'center',
            objectFit: 'cover',
            border: '2px solid #dddddd',
            zIndex: 0,
          }}
          src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <div
          style={{
            width: '14px',
            height: '14px',
            backgroundColor: '#0f0',
            border: '2px solid #dddddd',
            borderRadius: '7px',
            marginLeft: '35px',
            marginTop: '-18px',
            zIndex: 100,
            position: 'relative',
          }}
        ></div>
      </div>
      <div style={{ marginLeft: '10px', marginTop: '4px' }}>
        <div style={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}>
          {user.name}
        </div>
        <div
          style={{
            color: '#a9a9a9',
            fontWeight: 'normal',
            fontSize: '14px',
            marginTop: '-4px',
          }}
        >
          {user.email}
        </div>
      </div>
    </div>
  );
};

export default ChatHead;
