import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './CSS.css';

import css from '../../assets/css.png'


function CSS() {
  return (
    <Tab icon={css} title={"Cascading Style Sheets (CSS)"}>
        <div id='font-test-xs'>xs</div>
        <div id='font-test-sm'>sm</div>
        <div id='font-test-md'>md</div>
        <div id='font-test-lg'>lg</div>
        <div id='font-test-xl'>xl</div>
        <div id='font-test-2xl'>2xl</div>
    </Tab>
  )
}

export default CSS

