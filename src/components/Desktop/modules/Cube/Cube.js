import React from 'react'
import './Cube.css'

function Cube({image}) {
  return (
    <div id='dice'>
        <img className='side' id='side-1' src={image} alt='no-image'/>
        <img className='side' id='side-2' src={image} alt='no-image'/>
        <img className='side' id='side-3' src={image} alt='no-image'/>
        <img className='side' id='side-4' src={image} alt='no-image'/>
        <img className='side' id='side-5' src={image} alt='no-image'/>
        <img className='side' id='side-6' src={image} alt='no-image'/>
    </div>
  )
}

export default Cube