import React from 'react'
import "./Navbar.scss"
const name="Sahil Kandhare"
const Navbar = () => {
  return (
    <div className='navbar2 '>
      <div className="wrapper2">
        <div className='title-clg'>
          <img className='clg-logo' src="https://polytechnic.jspmrscoe.edu.in/storage/Menus/ListMenu/20/1632568266RSCOE-Logo.jpeg" alt="logo" /> JSPM's Rajarshi Shahu College Of Engineering
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

export default Navbar