import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img src={thumbnails.medium.url} alt={title} className='ui image' />
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='description'>
          Lorem ipsum dolor sit amet consectetur
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
