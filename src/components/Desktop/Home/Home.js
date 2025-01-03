import React from 'react'
import './Home.css'

//image
import background from '../../assets/xp-background.png'
import c from '../../assets/c.png'
import credit from '../../assets/credit.png'
import react from '../../assets/reactjs.png'
import python from '../../assets/python.png'
import html from '../../assets/html.png'
// import css from '../../assets/css.png'
// import js from '../../assets/js.png'


// components
import Footer from '../modules/Footer/Footer'

function Home() {
  return (
    <div id='home-container'>
      <div id='home-background-container'>
        {/* This is for the background image */}
        <img src={background} alt='womp womp' id='background'/> 
        <div id='home-logo-container'>
          <a href='./#/HTML' id='home-program-container'>
            <img id='logo' src={html} alt='womp womp'/>
            <div id='program-title'>HTML</div>
          </a>
          <a href='./#/C' id='home-program-container'>
            <img id='logo' src={c} alt='womp womp'/>
            <div id='program-title'>C Lang</div>
          </a>
          <a href='./#/REACT' id='home-program-container'>
            <img id='logo' src={react} alt='womp womp'/>
            <div id='program-title'>React JS</div>
          </a>
          <a href='./#/PYTHON' id='home-program-container'>
            <img id='logo' src={python} alt='womp womp'/>
            <div id='program-title'>Python</div>
          </a>
          <a href='./#/Credit' id='home-program-container'>
            <img id='logo' src={credit} alt='womp womp'/>
            <div id='program-title'>Credit</div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home