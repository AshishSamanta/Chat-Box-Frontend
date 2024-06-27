import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">Chat Box</span>
      <div className="user">
        <FontAwesomeIcon icon={faUser}/>
        <span>Ashish</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
