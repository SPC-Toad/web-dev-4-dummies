import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './JS.css';

import js from '../../assets/js.png'

function JS() {
  return (
    <Tab icon={js} title={"JavaScript (JS)"}>
        {/* CODE HERE */}
        {/* THIS IS WHERE HTML GOES */}
    </Tab>
  )
}

export default JS

