import {
  FormControl,
  FormGroup,
  Typography,
  Button,
  InputLabel,
  Input,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, getUser } from '../service/api';

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

const EditUser = () => {
  let defaultValue = {
    name: '',
    email: '',
    password: '',
  };
  const [user, setUser] = useState(defaultValue);
  let navigate = useNavigate();

  async function editUserDetails() {
    await editUser(user);
    navigate('/all');
  }
  let { name } = useParams();

  async function getAllUser() {
    let getData = await getUser(name);
    let data = getData.data.data;
    setUser(data[0]);
  }
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            name="name"
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            name="email"
          ></Input>
        </FormControl>
        <FormControl>
          <Btn
            variant="contained"
            onClick={() => {
              editUserDetails();
            }}
          >
            Edit User
          </Btn>
        </FormControl>
      </Container>
    </div>
  );
};
export default EditUser;

// import {
//   Button,
//   FormControl,
//   FormGroup,
//   Input,
//   InputLabel,
//   styled,
//   Typography,
// } from '@mui/material';
// import { React, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getUser, submitUser } from '../service/api';

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

// const EditUser = () => {
//   const [user, setUser] = useState(defaultValue);
//   const navigate = useNavigate();
//   function onChangeValue(e) {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   }

//   const { name } = useParams();

//   async function getAllUser() {
//     let shouldEditData = await getUser(name);
//     let info = shouldEditData.data.data;
//     setUser(info[0]);
//   }
//   async function updateUser() {
//     await submitUser(user);
//     navigate('/all');
//   }

//   useEffect(() => {
//     getAllUser();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4">Edit user</Typography>
//       <FormControl>
//         <InputLabel>Name</InputLabel>
//         <Input
//           onChange={(e) => onChangeValue(e)}
//           value={user.name}
//           name="name"
//         />
//       </FormControl>
//       <FormControl>
//         <InputLabel>User name</InputLabel>
//         <Input
//           onChange={(e) => onChangeValue(e)}
//           value={user.username}
//           name="username"
//         />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Email</InputLabel>
//         <Input
//           onChange={(e) => onChangeValue(e)}
//           value={user.email}
//           name="email"
//         />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Phone</InputLabel>
//         <Input
//           onChange={(e) => onChangeValue(e)}
//           value={user.phone}
//           name="phone"
//         />
//       </FormControl>
//       <FormControl>
//         <Button
//           variant="contained"
//           onClick={() => {
//             updateUser();
//           }}
//         >
//           Update User
//         </Button>
//       </FormControl>
//     </Container>
//   );
// };

// export default EditUser;
