import React from 'react'
import './HeroSection.css' 

// const Claim = () => "Urban Farms are transforming the Norwegian pak choi industry by combining autonomous biosystems with the latest in photon generating technology"
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

// Produced right here in the city
//
// Urban Farms are transforming the Norwegian pak choi industry by combining 
// autonomous hydrocarbon-synthesizing biosystems with the latest in photon generating technology
              // Urban Farms are transforming the Norwegian pak choi industry by combining 
              // autonomous hydrocarbon-synthesizing biosystems with the latest in photon 
              // generating technology
// Disrupting the Norwegian food industry by fusing semi-autonomous hydroponic biosystems with the latest in photon generating technology
