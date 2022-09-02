import {useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { addStud } from '../../service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`;

const defaultValue = {
    rollno: '',
    name: ''
}

const AddUser = () =>{

    const [user, setUser] = useState({ defaultValue });

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addStudentInfo = async() =>{
        await addStud(user);
        navigate('/roll-list');
    }
    return (
      <div>
        <Container>
          <Typography variant="h4">Student Details</Typography>
          <FormControl>
            <InputLabel>Roll No</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="rollno" />
          </FormControl>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" />
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={() => addStudentInfo()}>Add Student</Button>
          </FormControl>
        </Container>
      </div>
    );
}
export default AddUser;