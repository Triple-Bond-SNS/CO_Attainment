import React from 'react'
import "./Sidebar2.scss"
import { Link } from 'react-router-dom'
const Sidebar2 = () => {
    return (
        <div className='side-bar2'>
            <div className='top'>Dashboard</div>
            <div className='Mid icon-cont'>
                <Link to="/land" style={{ textDecoration: "none" }}>
                    <li className='icon1'><i clasName="fa-solid fa-house "></i></li>
                </Link>

                <Link to="/settings" style={{ textDecoration: "none" }}>
                    <li className='icon'><i className="fa-solid fa-gear "></i></li>
                </Link>

                <li className='icon'><i className="fa-solid fa-bell "></i></li>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li className='icon'><i className="fa-solid fa-right-from-bracket"></i></li>
                </Link>

                <li className='bottom-icon'><i className="fa-solid fa-circle-user"></i></li>
            </div>
        </div>
    )
}
export default Sidebar2