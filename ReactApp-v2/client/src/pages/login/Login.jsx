import React, { useState } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  const login = () => {
    axios.post("http://localhost:2710/login", user).then(res => {
      alert(res.data.msg)
      setLoginUser(res.data.user);
      navigate('/land');
    })
  }
  return (
    <div>
      <div className="container">
        <h1 className='clg-name'>JSPM's Rajarshi Shahu College of Engineering, Tathwade, Pune.</h1>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder='Enter Login-id'
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder='Enter Password'
        />
        <input className='button' type='submit' value="Login" onClick={login} />
        <div>OR</div>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <div className="button">Register</div>
        </Link>
      </div>
    </div>
  )
}

export default Login