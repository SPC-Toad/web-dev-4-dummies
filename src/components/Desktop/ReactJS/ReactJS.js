import React from 'react'
import Tab from '../modules/Tab/Tab';

// Importing CSS This is same as <style> or <link href='style.css'>
import './ReactJS.css';

import ReactJS from '../../assets/reactjs.png'

import Code from '../modules/Code/Code';

function HTML() {
  return (
    <Tab icon={ReactJS} title={"Hypertext Markup Language (ReactJS)"}>
        <div id='text'>
            <Code 
                type={"Announcement.txt"}
                code={<pre>This can be used as a reference.<br/>
                It is gonna take sometime since I am busy this week.<br/>
                I will probably work on this somewhere Nov 10th.<br/></pre>}
            />
        </div>
    </Tab>
  )
}

export default HTML

