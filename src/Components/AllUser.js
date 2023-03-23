import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../service/api';

let Tablecontainer = styled(Table)`
  width: 80%;
  margin: 20px auto 0 auto;
`;

let Thead = styled(TableRow)`
  background: black;
  & > th {
    color: white;
    font-size: 20px;
    text-align: center;
  }
`;

let Tbody = styled(TableRow)`
  background: grey;
  & > td {
    color: white;
    text-align: center;
    font-size: 20px;
  }
`;

const AllUser = () => {
  const [userList, setUserList] = useState([]);

  async function getAllUsers() {
    let getData = await getUsers();
    console.log(getData);
    setUserList(getData.data.data);
  }

  async function deleteAllUser(id) {
    await deleteUser(id);
    getAllUsers();
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <Tablecontainer>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {userList.map((item, index) => {
            return (
              <Tbody key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ marginRight: 10 }}
                    size="small"
                    component={Link}
                    to={`/read/${item.name}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      deleteAllUser(item.newId);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </Tbody>
            );
          })}
        </TableBody>
      </Tablecontainer>
    </div>
  );
};

export default AllUser;

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   styled,
//   Button,
// } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getUsers, deleteUser } from '../service/api.js';

// let Tablecontainer = styled(Table)`
//   width: 90%;
//   margin: 50px auto 0 auto;
// `;

// let Thead = styled(TableRow)`
//   background: #000000;
//   & > th {
//     color: #fff;
//     font-size: 20px;
//     text-align: center;
//   }
// `;
// let Tbody = styled(TableRow)`
//   background: grey;
//   & > td {
//     font-size: 15px;
//     text-align: center;
//   }
// `;
// const AllUser = () => {
//   const [userList, setUserList] = useState([]);

//   async function getAllUsers() {
//     let getData = await getUsers();
//     setUserList(getData.data.data);
//   }

//   async function deleteHandler(items) {
//     let deleteData = await deleteUser(items);
//     console.log(deleteData);
//     getAllUsers();
//   }

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   return (
//     <Tablecontainer>
//       <TableHead>
//         <Thead>
//           <TableCell>Id</TableCell>
//           <TableCell>Name</TableCell>
//           <TableCell>Username</TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>Phone</TableCell>
//           <TableCell>Action</TableCell>
//         </Thead>
//       </TableHead>
//       <TableBody>
//         {userList.map((items, index) => {
//           return (
//             <Tbody key={index}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{items.name}</TableCell>
//               <TableCell>{items.username}</TableCell>
//               <TableCell>{items.email}</TableCell>
//               <TableCell>{items.phone}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   style={{ marginRight: 10 }}
//                   size="small"
//                   component={Link}
//                   to={`/edit/${items.name}`}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="small"
//                   onClick={() => deleteHandler(items)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </Tbody>
//           );
//         })}
//       </TableBody>
//     </Tablecontainer>
//   );
// };

// export default AllUser;
