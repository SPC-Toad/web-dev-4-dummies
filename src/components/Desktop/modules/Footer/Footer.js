import React, {useState, useEffect} from 'react'
import './Footer.css'

// image
import xpLogo from '../../../assets/xp-logo-no-word.png';
import pepe from '../../../assets/pepe.jpg'

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
      {/* Make a nav */}
      {nav &&
          (<div id='nav-container'>
            <div id='nav-header-container'>
              <img id='user-logo' src={pepe} alt='womp womp'/>
              <div id='username-text'>Administrator</div>
            </div>
            <div id='nav-body-container'>
              <div id='nav-body-half-container'>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
              </div>
              <div id='nav-body-half-container'>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
                <img id='user-logo' src={pepe} alt='womp womp'/>
              </div>
            </div>
            <div id='nav-button-container'></div>
          </div>)
        }
      <div id='start-container' onClick={handleNav}>
        <img id='windows-logo' src={xpLogo} alt='womp-womp'/>
        <div id='start-text'>start</div>
      </div>
      <div id='clock-container'>
        <div id='clock'>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  )
}

export default Footer