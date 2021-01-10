import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video){
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return(
    <div>
      {/* embed sematic ui class for displaying embeded video player */}
      <div className="ui embed">
        {/* iframe tag(html tag) makes a request to some outside website besides the one user is currently visiting on the screen. We will tell iframe to make request to some speific address, on its own without any ajax stuff 
        . Youtube will reply with all the html and js required to show the video player on the screen */}
        <iframe title="video player" src={videoSrc} ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description}  </p>
      </div>
    </div>
  )
}

export default VideoDetail;