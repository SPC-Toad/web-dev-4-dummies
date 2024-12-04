import React, { useState } from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './ReactJS.css';

import Reactjs from '../../assets/reactjs.png'

import Code from '../modules/Code/Code';

import codeData from './reactData';

function ReactJS() {
  const [counter, setCounter] = useState(0);

  return (
    <Tab icon={Reactjs} title={"React JS"}>
      <div id="c-container">
        <div id="c-title">React JS</div>
        <ol id="c-ol-container">
          {codeData.map((item, index) => (
            <li key={index} id="c-li-container">
              <div id="c-li-text">{item.topic}</div>
              <Code 
                type={item.type} 
                code={item.code}
                shadow={item.shadow}
              />
            </li>
          ))}
        </ol>
        <div id='react-js-example-container'>
          <h3 id="c-title">Example / Demo </h3>
          <div id='react-js-text'>You clicked {counter} times</div>
          <div id='react-js-text'>{counter >= 10 && (<div>Good job LOL, you can stop clicking</div>)}</div>
          <button id='react-js-example-button' onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </div>
    </Tab>
  )
}

export default ReactJS
