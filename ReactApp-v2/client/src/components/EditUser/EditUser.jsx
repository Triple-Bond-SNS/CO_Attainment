import { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { editStud, getUser } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  rollno: "",
  name: "",
};

const EditUser = () => {
  const [user, setUser] = useState({ defaultValue });

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    loadUserDetails();
  }, [])

  const loadUserDetails = async() =>{
    const response = await getUser(id);
    setUser(response.data);
  }

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editStudentInfo = async () => {
    await editStud(user, id);
    navigate("/roll-list");
  };
  
  return (
    <div>
      <Container>
        <Typography variant="h4">Edit Details</Typography>
        <FormControl>
          <InputLabel>Roll No</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="rollno"
            value={user.rollno}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => editStudentInfo()}>
            Edit
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};
export default EditUser;
