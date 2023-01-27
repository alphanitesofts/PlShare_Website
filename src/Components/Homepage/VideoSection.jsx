import React from 'react'
import video from '..//SourceFiles/Images/SHARES.mp4'
const VideoSection = () => {
  return (
    <div>
      <div id='home'>
        <video className='VideoSection' style={{ pointerEvents: 'none' }} muted autoPlay  >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoSection