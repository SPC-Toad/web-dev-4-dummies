import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './HTML.css';

import html from '../../assets/html.png'

function HTML() {
  return (
    <Tab icon={html} title={"Hypertext Markup Language (HTML)"}>
        {/* CODE HERE */}
        {/* THIS IS WHERE HTML GOES */}
        <p>Write your html tutorial here. This is basically your 'main' tag</p>
    </Tab>
  )
}

export default HTML

