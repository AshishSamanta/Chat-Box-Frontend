import { faEllipsis, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Messages from "./Messages"
import Input from "./Inputpanel"
import Inputpanel from './Inputpanel'

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Rohit</span>
        <div className="chatIcons">
          <FontAwesomeIcon icon={faVideo} />

          <FontAwesomeIcon icon={faUserPlus} />

          <FontAwesomeIcon icon={faEllipsis} />


        </div>
        
      </div>
      <Messages/>
      <Inputpanel/>
    </div>
  )
}
