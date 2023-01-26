import React from 'react'
import video from '..//SourceFiles/promotion.mp4'
const VideoSection = () => {
  return (
    <div>
      <div id='home'>
        <video className='VideoSection' muted autoPlay controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoSection