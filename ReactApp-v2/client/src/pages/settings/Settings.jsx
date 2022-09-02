import React from 'react'
import "./Settings.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Settings = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="items">
          <div className="sub-title">
            <p className='page-title'>Settings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings