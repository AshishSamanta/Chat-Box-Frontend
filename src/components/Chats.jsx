import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Chats() {
  return (
    <div className='chats'>
      <div className="userChat">
        <FontAwesomeIcon icon={faUser}/>

        <div className="userChatInfo">
          <span> Rohit </span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}
