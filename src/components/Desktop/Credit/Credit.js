import React, { useEffect, useState } from 'react'
import Tab from '../modules/Tab/Tab'
import Card from '../modules/Card/Card'
import credit from '../../assets/credit.png'
import './Credit.css'
import pepexp from '../../assets/pepewindowsxp.jpg';
import pepejjk from '../../assets/pepesataro.jpg';
import source_data from './data.js'

function Credit() {
  const [currIndex, setCurrIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const gallery = [
    pepexp,
    pepejjk,
  ]

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(source_data.length - 1)
    }
    else {
      setCurrIndex(currIndex-1)
    }
  }
  
  const handleNext = () => {
    if (currIndex === source_data.length - 1) {
      setCurrIndex(0)
    }
    else {
      setCurrIndex(currIndex+1)
    }
  }

  

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(Math.floor(Math.random() * gallery.length));
    }, 3000); 
    // Change background every 3 seconds
  
    return () => clearInterval(interval);
  }, [gallery.length]);
  

  return (
    <Tab icon={credit} title={"Credit Page!"}>
      <img src={gallery[backgroundIndex]} alt="pepewindow" id="credit-background"/>
      <div id='credit-container'>
        <Card 
            subject={source_data[currIndex].subject} 
            subject_url={source_data[currIndex].subject_url} 
            author={source_data[currIndex].author} 
            author_url={source_data[currIndex].author_url} 
            license={source_data[currIndex].license} 
            license_url={source_data[currIndex].license_url}
        />
        <div id='credit-button-container'>
          <div onClick={handlePrev} id='credit-button' >Prev</div>
          <div onClick={handleNext} id='credit-button' >Next</div>
        </div>
      </div>
    </Tab>
  )
}

export default Credit