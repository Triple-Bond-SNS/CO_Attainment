import React, { useState } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
  const [user, setUser] = useState({
    id: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <div>
      <div className="container">
        <h1 className='clg-name'>JSPM's Rajarshi Shahu College of Engineering, Tathwade, Pune.</h1>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" name="id" value={user.id} onChange={handleChange} placeholder='Enter Login-id' />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter Password' />
        <div className="button">Login</div>
        <div>OR</div>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <div className="button">Register</div>
        </Link>
      </div>
    </div>
  )
}

export default Login