import React from 'react';
import video from '../../assets/video-camera.png';

const VideoCall = ({ onClick }) => {
  return (
    <div>
      <img
        src={video}
        style={{
          width: '20px',
          height: '20px',
          marginLeft: '15px',
          marginRight: '15px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default VideoCall;
