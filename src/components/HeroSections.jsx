import React, { useRef } from 'react'
import './HeroSection.css' 

// media query for tilpasning til mindre skjerm (mobile)



const Claim = () => {
  return (
    <p className="hero-text" style={{textAlign: "center", padding: "120px"}} >
Disrupting the Norwegian food industry by fusing semi-autonomous hydroponic biosystems with the latest in photon generating technology
    </p>
  )
}
const HeroSection = () => {

    const videoRef = useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 0.8;
    };

    return (
      <div className='hero-container'>

        <Claim />
        <video 
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
          style={{
            opacity: "0.5", 
          }}
          src={require('./../media/videos/vid.mp4')} loop muted //autoPlay 
          type="video/mp4"
        />

      </div>
    )
}

export default HeroSection

