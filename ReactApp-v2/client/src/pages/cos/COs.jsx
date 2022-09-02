import React from 'react'
import "./COs.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Dropdown from '../../components/dropdown/Dropdown'
const COs = () => {
  const [show, setShow] = useState(false)
  
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="items">
          <div className="sub-title">
            <p className='page-title'>Couse Outcomes</p>
            <i className="fa-solid fa-book icon"></i> Formal Language and automata theory [CS2101]
          </div>
          <div className="row">
            <div className="col-lg-3 co-card">
              <p>COs</p>
              <Link to="/data" style={{ textDecoration: "none" }}>
                <p><button className='insert-data'> Insert Data </button></p>
              </Link>
                <button className='report' onClick={()=>{
                  setShow(!show)
                }}> Generate Report <i class="fa-solid fa-angle-down"></i></button>
            </div>
          </div>
          <div>
            {show? <Dropdown></Dropdown> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default COs