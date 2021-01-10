import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video , onVideoSelect}) => {
  return (
    // not just onClick={onVideoSelect} but with an arrow function because we want to pass a video to the callback
    // because we want to call the onVideoSelect with the current video
    // communication from a child component to parent component witha callback(props for communicating from parent to child)
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img  alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoItem;