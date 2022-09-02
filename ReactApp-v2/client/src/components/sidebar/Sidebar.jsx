import React from 'react'
import "./Sidebar.scss"
import { Link } from 'react-router-dom'
const Sidebar = ({setLoginUser}) => {
    return (
        <div className='side-bar'>
            <div className='top'>
                <Link to="/land" style={{ textDecoration: "none" }}>
                    <span className='logo'>Dashboard</span>
                </Link>

            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">Main</p>
                    <Link to="/roll-list" style={{ textDecoration: "none" }}>
                        <li><span><i className="fa-solid fa-table-list"></i> Roll List</span></li>
                    </Link>

                    <Link to="/cos" style={{ textDecoration: "none" }}>
                        <li><span><i className="fa-solid fa-book"></i> Course Outcomes</span></li>
                    </Link>


                    <Link to="/pos" style={{ textDecoration: "none" }}>
                        <li><span><i className="fa-solid fa-trophy"></i> Program Outcomes</span></li>
                    </Link>

                    <p className="title">User</p>
                    <Link to="/settings" style={{ textDecoration: "none" }}>
                        <li><span><i className="fa-solid fa-gear"></i> Settings</span></li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li><span><i className="fa-solid fa-right-from-bracket" onClick={()=>setLoginUser({})}></i> Logout</span></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar