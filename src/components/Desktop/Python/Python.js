import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './Python.css';

import python from '../../assets/python.png'

function Python() {
  return (
    <Tab icon={python} title={"Python"}>
        {/* CODE HERE */}
        {/* THIS IS WHERE HTML GOES */}
    </Tab>
  )
}

export default Python

