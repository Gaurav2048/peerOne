import React from 'react';
import video from '../../assets/video-camera.png';

const VideoCall = () => {
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
      />
    </div>
  );
};

export default VideoCall;
