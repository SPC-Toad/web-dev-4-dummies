import React from 'react'
import './Code.css'

function Code({type, code, shadow}) {
  return (
    <div id='code-container' style={{boxShadow: `${shadow}`}}>
        <div id='code-header'>
            <div id='code-header-description'>{type}</div>
        </div>
        <code id='code-content'>
            <pre>{code}</pre>
        </code>
    </div>
  )
}

export default Code