import React from 'react'
import "./Navbar2.scss"
const name="sk@gmail.com"
const Navbar2 = () => {
  return (
    <div className='navbar2'>
      <div className="wrapper2">
        <div className='title2'>
          <span>HOME</span>
        </div>
        <div className="items2">
          <div className="username2">
            {name}
          </div>
          <div className="userprofile2">
            <img className='avatar2' src="https://pbs.twimg.com/profile_images/1535278814238248960/ZP-3YX9M_400x400.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar2