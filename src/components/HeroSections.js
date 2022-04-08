import React from 'react'
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
    return (
      <div className='hero-container'>

        <Claim />
        <video 
          style={{
            opacity: "0.5", 
            color: "white", 
          }}
          src={require('./../media/videos/vid.mp4')} autoPlay loop muted 
          type="video/mp4"
        />

      </div>
    )
}

export default HeroSection

