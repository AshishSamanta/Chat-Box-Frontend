import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Searchbar() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <FontAwesomeIcon icon={faUser}/>
        <div className="userChatInfo">
          <span> Rohit </span>
        </div>
      </div>
    </div>
  )
}
