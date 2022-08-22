import React from 'react'
import "./POs.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const POs = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="items">
          <div className="sub-title">
            <p className='page-title'>Program Outcomes</p>
            <i className="fa-solid fa-book icon"></i> Formal Language and automata theory [CS2101]
          </div>
        </div>
      </div>
    </div>
  )
}

export default POs