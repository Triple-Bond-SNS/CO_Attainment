import React, { useState } from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const Register = () => {
  return (
    <div>
      <div className="container">
        <h1 className='clg-name'>JSPM's Rajarshi Shahu College of Engineering, Tathwade, Pune.</h1>
      </div>
      <div className="register">
        <h1>Register</h1>
        <input type="text" placeholder='Enter Your Name' />
        <input type="text" placeholder='Enter Login-id' />
        <input type="password" placeholder='Enter Password' />
        <input type="password" placeholder='Re-Enter Password' />
        <div className="button">Register</div>
        <div>OR</div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="button">Login</div>
        </Link>
      </div>
    </div>
  )
}

export default Register