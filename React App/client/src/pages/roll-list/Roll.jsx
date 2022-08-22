import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './Roll.scss'
const Roll = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="items">
          <div className="sub-title">
            <p className='page-title'>Roll List</p>
            <i className="fa-solid fa-book icon"></i> Formal Language and automata theory [CS2101]
          </div>
          <div className="stu-card">
            <div className="Add">
              Add Student Data
            </div>
            <div className='Newform'>
              <form action="">
                <input className='input-btns' type="file" />
                <input className='input-btns' type="submit" value="submit" />
              </form>
            </div>
            <div className='button'>
              <button className='btn'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roll