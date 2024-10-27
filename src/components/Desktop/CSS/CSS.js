import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './CSS.css';

import css from '../../assets/css.png'


function CSS() {
  return (
    <Tab icon={css} title={"Cascading Style Sheets (CSS)"}>
        {/* CODE HERE */}
        {/* THIS IS WHERE HTML GOES */}
    </Tab>
  )
}

export default CSS

