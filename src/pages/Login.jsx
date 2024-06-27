import { faImage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Chat Box</span>
            <span className="title">Login</span>
            <form>
                {/* <input type="text" placeholder='Displayname'/> */}
                <input type="email" name="" id="" placeholder='email' />
                <input type="password" placeholder='password'/>
                {/* <input type="file" id='file' style={{display:"none"}}/>
                <label htmlFor="file">
                 <FontAwesomeIcon icon={faImage}/>Add an avatar</label> */}
                <button className="signup">Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}
