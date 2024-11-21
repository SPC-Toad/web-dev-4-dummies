import React from 'react'
import './Code_snippet.css'

function Code_snippet({title, subtext, code}) {
  return (
    <div>
      <div>{title}</div>
      <div>{subtext}</div>
      <pre>{code}</pre>
    </div>
  )
}

export default Code_snippet
