import {
  FormControl,
  FormGroup,
  Typography,
  Button,
  InputLabel,
  Input,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';

let Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

let Btn = styled(Button)`
  width: 40%;
  text-align: center;
  margin: auto;
`;

const AddUser = () => {
  let defaultValue = {
    name: '',
    email: '',
    password: '',
  };
  const [user, setUser] = useState(defaultValue);
  let navigate = useNavigate();
  async function addUserDetails() {
    await addUser(user);
    navigate('/all');
  }

  return (
    <div>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            name="name"
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            name="email"
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>password</InputLabel>
          <Input
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            name="Password"
          ></Input>
        </FormControl>
        <FormControl>
          <Btn
            variant="contained"
            onClick={() => {
              addUserDetails();
            }}
          >
            Add User
          </Btn>
        </FormControl>
      </Container>
    </div>
  );
};
export default AddUser;

// import {
//   Button,
//   FormControl,
//   FormGroup,
//   Input,
//   InputLabel,
//   styled,
//   Typography,
// } from '@mui/material';
// import { React, useState } from 'react';
// import { addUser } from '../service/api';
// import { useNavigate } from 'react-router-dom';

// let Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% auto 0 auto;
//   & > div {
//     margin-top: 20px;
//   }
// `;

// const defaultValue = {
//   name: '',
//   username: '',
//   email: '',
//   phone: '',
// };

// const AddUser = () => {
//   const [user, setUser] = useState(defaultValue);
//   const navigate = useNavigate();
//   function onChangeValue(e) {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   }

//   const addUserDetails = async () => {
//     await addUser(user);
//     navigate('/all');
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Add user</Typography>
//       <FormControl>
//         <InputLabel>Name</InputLabel>
//         <Input onChange={(e) => onChangeValue(e)} name="name" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>User name</InputLabel>
//         <Input onChange={(e) => onChangeValue(e)} name="username" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Email</InputLabel>
//         <Input onChange={(e) => onChangeValue(e)} name="email" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Phone</InputLabel>
//         <Input onChange={(e) => onChangeValue(e)} name="phone" />
//       </FormControl>
//       <FormControl>
//         <Button variant="contained" onClick={() => addUserDetails()}>
//           Add User
//         </Button>
//       </FormControl>
//     </Container>
//   );
// };

// export default AddUser;
