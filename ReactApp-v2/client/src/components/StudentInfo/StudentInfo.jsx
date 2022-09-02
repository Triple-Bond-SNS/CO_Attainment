import {useEffect, useState} from 'react';
import { Table, TableRow, TableBody, TableCell, TableHead, styled, Button } from "@mui/material";
import {getData, delUser} from "../../service/api.js";
import {Link} from 'react-router-dom';

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

const StudentInfo = () =>{

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async() =>{
        let response = await getData();
        setUsers(response.data);
    }

    const deleteUser = async(id) =>{
        await delUser(id);
        getAllData();
    }

    return (
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
                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color='secondary' onClick={() => deleteUser(user._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    );
}
export default StudentInfo;