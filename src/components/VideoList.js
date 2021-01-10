import React from 'react'
import VideoItem from './VideoItem';

const  VideoList = ({ videos, onVideoSelect }) => {
  // renderedList is an array consisting of a list of different VideoItem components
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  })
  return (
    <div className="ui relaxed divided list">
      {/* <div>{videos.length}</div> */}
      {renderedList}
    </div>
  )
}

export default VideoList;