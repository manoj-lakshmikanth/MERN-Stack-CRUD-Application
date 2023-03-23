import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from '@mui/material';
import { loginUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

let Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

let Btn = styled(Button)`
  width: 30%;
  text-align: center;
  margin: 30px auto auto auto;
`;
const LoginUser = () => {
  let defaultValue = {
    name: '',
    email: '',
    password: '',
  };
  const [user, setUser] = useState(defaultValue);
  let navigate = useNavigate();
  async function LoginDetails() {
    let response = await loginUser(user);
    if (response.data.message == 'Logged in Succesfully') {
      alert(response.data.message);
      navigate('/all');
    } else {
      alert(response.data.message);
    }
  }
  return (
    <div>
      <Container>
        <Typography variant="h4">Login User</Typography>
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
          <InputLabel>Password</InputLabel>
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
              LoginDetails();
            }}
          >
            Login
          </Btn>
        </FormControl>
      </Container>
    </div>
  );
};

export default LoginUser;
