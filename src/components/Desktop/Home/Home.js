import React from 'react'
import './Home.css'

//image
import background from '../../assets/xp-background.png'
import pepe from '../../assets/pepe.jpg'

// components
import Footer from '../modules/Footer/Footer'

function Home() {
  return (
    <div id='home-container'>
      <div id='home-background-container'>
        {/* This is for the background image */}
        <img src={background} alt='womp womp' id='background'/> 
        <div id='logo-container'>
          <img id='logo' src={pepe}/>
          <img id='logo' src={pepe}/>
          <img id='logo' src={pepe}/>
          <img id='logo' src={pepe}/>
          <img id='logo' src={pepe}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home