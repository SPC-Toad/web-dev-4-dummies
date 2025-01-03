import React, {useState, useEffect} from 'react'
import './Footer.css'

// image
import xpLogo from '../../../assets/xp-logo-no-word.png';
import pepe from '../../../assets/pepe.jpg'
import logOff from '../../../assets/xp-logoff.png'
import shutdown from '../../../assets/xp-shutoff.png'

import c from '../../../assets/c.png'
import credit from '../../../assets/credit.png'
import html from '../../../assets/html.png'
// import css from '../../../assets/css.png'
// import js from '../../../assets/js.png'
import reactjs from '../../../assets/reactjs.png'
import python from '../../../assets/python.png'

function Footer() {
  const [time, setTime] = useState(new Date());
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div id='footer-container'>
      {
        nav &&
        (
          <div id='nav-container'>
            <div id='nav-header-container'>
              <img id='user-logo' src={pepe} alt='womp womp'/>
              <div id='username-text'>Administrator</div>
            </div>
            <hr id='nav-divider' />
            <div id='nav-body-container'>
              <div id='nav-body-left-container'>
                <a href='./#/HTML' id='nav-body-item-container'>
                  <img id='nav-body-item-icon' src={html} alt='womp womp'/>
                  <div id='nav-body-item-title'>HTML</div>
                </a>
                <a href='./#/Credit' id='nav-body-item-container'>
                  <img id='nav-body-item-icon' src={credit} alt='womp womp'/>
                  <div id='nav-body-item-title'>Credit</div>
                </a>
                <a href='./#/REACT' id='nav-body-item-container'>
                  <img id='nav-body-item-icon' src={reactjs} alt='womp womp'/>
                  <div id='nav-body-item-title'>REACT</div>
                </a>
              </div>
              <div id='nav-body-right-container'>
                <a href='./#/PYTHON' id='nav-body-item-container'>
                  <img id='nav-body-item-icon' src={python} alt='womp womp'/>
                  <div id='nav-body-item-title'>Python</div>
                </a>
                <a href='./#/C' id='nav-body-item-container'>
                  <img id='nav-body-item-icon' src={c} alt='womp womp'/>
                  <div id='nav-body-item-title'>C</div>
                </a>
              </div>
            </div>
            <div id='nav-buttons-container'>
              <a href='./#/Bluescreen' id='nav-button-container'>
                <img id='nav-button' src={logOff} alt='womp womp'/>
                <div id='nav-button-text'>Log Off</div>
              </a>
              <a href='./#/Bluescreen' id='nav-button-container'>
                <img id='nav-button' src={shutdown} alt='womp womp'/>
                <div id='nav-button-text'>Turn Off</div>
              </a>
            </div>
          </div>
        )
      }
      <div id='start-container' onClick={handleNav}>
        <img id='footer-windows-logo' src={xpLogo} alt='womp-womp'/>
        <div id='start-text'>start</div>
      </div>
      <a href="./#/Credit" id="footer-credit"><div>Rights reserved: &#169;Credits</div></a>
      <div id='clock-container'>
        <div id='clock'>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  )
}

export default Footer