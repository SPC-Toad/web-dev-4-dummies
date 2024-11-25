import React from 'react'
import './Card.css'

function Card({ subject, subject_url, author, author_url, license, license_url }) {
  return (
    <div id='card-container'>
        <div id='card-title'>
            {subject}
        </div>
        <hr />
        <ul id='card-content'>
            <li>The image of a <a href={subject_url}>{subject}</a></li>
            <li>is provided by <a href={author_url}>{author}</a></li>
            <li>under <a href={license_url}>{license}</a></li>
        </ul>
    </div>
  )
}

export default Card
