import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './HTML.css';

import html from '../../assets/html.png'
import Code from '../modules/Code/Code';
import data from '../HTML/HTML_data';

function HTML() {
  return (
    <Tab icon={html} title={"Hypertext Markup Language (HTML)"}>
       <div id="html-container">
          <h1 id= 'html-title'><strong>HTML</strong></h1>
          <p id='html-text'>
          HTML (HyperText Markup Language) is the foundation of the web, used to structure and 
          display content on websites. It uses a system of tags and elements to define headings, 
          paragraphs, links, images, and other components. Paired with CSS for styling and JavaScript 
          for interactivity, HTML enables the creation of visually appealing and functional webpages.
          </p>
          
          <div id='html-code-container'>
          {
            data.map((key, index) => (
              <div key={index}>
                <div id='html-code-box-title'>{key.title}</div>
              
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

export default HTML

