import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>myAPP</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon' />
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>3</span>
        </div>
        <div className="user">
          <img src="/img3.jpg" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className='icon' />

      </div>
    </div>

  )
}

export default Navbar