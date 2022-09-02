import React, { useState } from 'react'
import Sidebar2 from '../../components/sidebar/Sidebar2'
import Navbar2 from '../../components/navbar/Navbar2'
import "./Land.scss"
import { Link } from 'react-router-dom'
const name = "sk@gmail.com"
const next = ">"
const Land = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='home1'>
      <Sidebar2 />
      <div className="home-container1">
        <Navbar2 />
        <div className="display">
          <div className="card">
            <p className='para'>Hi, <span className='name'>{name}</span> Nice to see you here !</p>
          </div>
          <div className="card2">
            <p className='greeting'>Welcome <span className='style'>Onboard</span></p>
            <p className='recent'>Recent Wrok {next}</p>
          </div>
          <div className="card-3">
            <div className='img'>
              <img className='user-img' src="https://www.techrika.com/wp-content/uploads/2021/08/Software-Engineer.png" alt="no img" />
            </div>
          </div>
        </div>

        <div className="course">
          <h2 className='title'>Courses {next}</h2>
          <div className="row">
            <div className="col-lg-3 course-card">
              <i className="fa-solid fa-book icon"></i> <span className='sub'>FLAT <i type='bytton' className="fa-solid fa-circle-info info" id='info-btn' onClick={() => {
              setShow(true)}}></i></span>
              <div className="content">
                <p>Semester III</p>
                <p>Div - A</p>

              </div>
              <Link to="/roll-list" style={{ textDecoration: "none" }}>
                <button className='btn'>Records</button>
              </Link>
            </div>

            {show ?
            <div className='row'>

            
            <div className="col-lg-3 course-card-dummy">
              <span className='head'><ul className='course-obj'>Course Objective: <i type='button' className="fa-solid fa-xmark  icon" onClick={() => {
              setShow(false)
            }}></i> </ul> </span>
              <div>
                <li>To study abstract computing models.</li>
                <li>To learn Grammar and Turing Machine.</li>
                <li>To learn about the theory of computability and complexity.</li>
                <li>To study different complexity classes.</li>
              </div>
              <ul className='head'>Course Outcome:</ul> 
              <p>After successful completion of the course, students will able to:</p>
              <li>CO1: To design finite state machines to solve problems in computing.</li>
              <li>CO2: To apply mathematical knowledge for syntax verification using grammar.</li>
              <li>CO3: To design and analyze Push Down automata and Post Machine for formal languages.</li>
              <li>CO4: To design and analyze Turing machine.</li>
              <li>CO5: To explain undecideability, apply reduction techniques, prove NP completeness of a problem.</li>
            </div>
            </div>: null}
            


            <div className="col-lg-3 course-card">
              <i className="fa-solid fa-book icon"></i> <span className='sub'>CGA <i className="fa-solid fa-circle-info info"></i></span>
              <div className="content">
                <p>Semester III</p>
                <p>Div - A</p>
              </div>
              <Link to="#" style={{ textDecoration: "none" }}>
                <button className='btn'>Records</button>
              </Link>
            </div>

          </div>
        </div>

      </div>

    </div>

  )
}
export default Land