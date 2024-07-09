import { faBoxArchive, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Inputpanel() {
  return (
    <div className='Input'>
      <input type="text" placeholder='type something....'/>
      <div className="send">
        <FontAwesomeIcon icon={faBoxArchive}/>
        <input type='file' style={{display : "NONE"}} id = "file" />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faImages}/>        
        </label>
        <button >Send</button>
      </div>
    </div>
  )
}
