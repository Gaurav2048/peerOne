import React from 'react';
import AudioCall from './AudioCall';
import VideoCall from './VideoCall';

const HeadSection = ({ user, onVideoClick }) => {
  return (
    <div
      style={{
        paddingLeft: '12px',
        paddingTop: '12px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #F7F7F7',
        paddingBottom: '10px',
      }}
    >
      <div>
        <div style={{ color: '#000', fontWeight: 'bold', fontSize: '30px' }}>
          {user.name}
        </div>
        <div
          style={{
            color: '#cccccc',
            fontSize: '15px',
            fontWeight: 'normal',
            marginTop: '-6px',
          }}
        >
          Online
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <AudioCall />
        <VideoCall onClick={(e) => onVideoClick(user.peerId)} />
      </div>
    </div>
  );
};

export default HeadSection;
