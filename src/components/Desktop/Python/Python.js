import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './Python.css';

import python from '../../assets/python.png'
import Code from '../modules/Code/Code';

import data from './Code_snippet/python_data'

function Python() {
  return (
    <Tab icon={python} title={"Python"}>
      <div id="python-container">
        <h1 id='python-title'><strong>PYTHON</strong></h1>
        <p id='python-text'>
          Python is a popular, versatile programming language known for its simplicity and readability. 
          Whether you're a beginner just getting started with coding or an experienced developer exploring new technologies
          Its straightforward syntax mimics the English language, making it accessible and user-friendly.
        </p>
        <p id='python-text'>Why Python?</p>
        <ul id='python-list-container'>
          <li id='python-list-item'>Easy to Learn and Use: Python’s clear and concise syntax allows new developers to grasp programming concepts quickly </li>
          <li id='python-list-item'>Wide Range of Applications: From web development and data analysis to artificial intelligence and automation, Python is used in numerous fields.</li>
          <li id='python-list-item'>Extensive Libraries and Frameworks: Python offers a rich ecosystem with libraries like Pandas, NumPy, and frameworks like Django and Flask. </li>
          <li id='python-list-item'>Strong Community Support: Python boasts a large, active community, providing resources, tutorials, and help for developers. </li>
        </ul>
        <div id='python-code-container'>
          {
            data.map((key, index) => (
              <div key={index}>
                <div id='python-code-box-title'>{key.title}</div>
                 
                
                <Code 
                  type={'Console'}
                  code={key.code}
                  shadow={key.shadow}
                />
              </div>
            ))
          }
        </div>

      </div>
    </Tab>
  )
} 

export default Python

