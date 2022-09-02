import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './Roll.scss'
import { useEffect, useState } from 'react';
import { Table, TableRow, TableBody, TableCell, TableHead, styled, Button } from "@mui/material";
import { getData, delUser } from "../../service/api";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #ef5928;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 40px;
  color: inherit;
  text-decoration: none;
`;

const StyledTable = styled(Table)`
    width: 50%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background: #000000;
    & > th{
        color: #fff;
        font-size: 20px;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 20px;

    }
`

const Roll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let response = await getData();
    setUsers(response.data);
  }

  const deleteUser = async (id) => {
    await delUser(id);
    getAllData();
  }
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
        </div>
        <Header position="static">
          <Toolbar>
            <i class="fa-solid fa-pen-to-square pen"></i>
            <Tabs to="/add">Add Student</Tabs>
          </Toolbar>
        </Header>
        <StyledTable>
          <TableHead>
            <THead>
              <TableCell>Sr No.</TableCell>
              <TableCell>Roll No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell></TableCell>
            </THead>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TBody key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.rollno}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant="contained" color='secondary' onClick={() => deleteUser(user._id)}>Delete</Button>
                </TableCell>
              </TBody>
            ))}
          </TableBody>
        </StyledTable>
      </div>
    </div>
  )
}

export default Roll