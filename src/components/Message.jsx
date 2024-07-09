import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Message() {
  return (
    <div className='Message'>
        <div className="messageInfo">
        <FontAwesomeIcon icon={faSmile}/>
        <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            {/* <FontAwesomeIcon icon={faSmile}/> */}
        </div>
    </div>
  )
}
