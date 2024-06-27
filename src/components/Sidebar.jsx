import React from 'react'
import Navbar from "./Navbar.jsx"
import Search from "./Searchbar.jsx"
import Chats from './Chats'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}
