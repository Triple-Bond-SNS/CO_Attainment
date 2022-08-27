import React, { useState } from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    re_password: ""
  });
 
  const handleChange = e=>{
    const {name , value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const registerME = ()=>{
    const {name,email,password, re_password} = user;
    if(name && email && password && re_password && (password === re_password)){
      alert("Data Posted")
      axios.post("http://localhost:2710/register",user).then(res => {
        alert(res.data.msg)
        navigate('/');
      })
    }
    else{
      alert("Invalid Input");
    }
  }
  return (
    <div>
      <div className="container">
        <h1 className='clg-name'>JSPM's Rajarshi Shahu College of Engineering, Tathwade, Pune.</h1>
      </div>
      <div className="register">
        <h1>Register</h1>
          <input
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder='Enter Email-id'
            name='email'
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder='Enter Password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder='Re-Enter Password'
            name='re_password'
            value={user.re_password}
            onChange={handleChange}
          />

          <input className='button' type='submit' value="Register" onClick={registerME}/>

        <div>OR</div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="button">Login</div>
        </Link>
      </div>
    </div>
  )
}

export default Register
