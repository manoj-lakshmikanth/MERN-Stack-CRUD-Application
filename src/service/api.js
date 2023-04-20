import axios from 'axios';
import { nanoid } from 'nanoid';

export async function addUser(user) {
  user.newId = nanoid();
  let options = {
    url: 'https://crudappbackend-mbuz.onrender.com/add',
    method: 'post',
    headers: { 'content-type': 'application/json' },
    data: user,
  };
  try {
    let response = await axios(options);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(user) {
  let options = {
    url: 'https://crudappbackend-mbuz.onrender.com/login',
    method: 'post',
    headers: { 'content-type': 'application/json' },
    data: user,
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  let options = {
    url: 'https://crudappbackend-mbuz.onrender.com/get',
    method: 'get',
    headers: { 'content-type': 'application/json' },
  };
  try {
    let response = await axios(options);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(name) {
  let options = {
    url: `https://crudappbackend-mbuz.onrender.com/read/${name}`,
    method: 'get',
    headers: { 'content-type': 'application/json' },
  };
  try {
    let response = await axios(options);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function editUser(user) {
  let options = {
    url: `https://crudappbackend-mbuz.onrender.com/edit/${user.newId}`,
    method: 'put',
    headers: { 'content-type': 'application/json' },
    data: user,
  };
  try {
    let response = await axios(options);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(id) {
  let options = {
    url: `https://crudappbackend-mbuz.onrender.com/delete/${id}`,
    method: 'delete',
    headers: { 'content-type': 'application/json' },
  };
  try {
    let response = await axios(options);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// import axios from 'axios';
// import { nanoid } from 'nanoid';

// export const addUser = async (data) => {
//   data.newId = nanoid();
//   let options = {
//     url: 'http://localhost:8000/add',
//     method: 'post',
//     headers: { 'content-type': 'application/json' },
//     data: data,
//   };
//   try {
//     let response = await axios(options);
//     console.log(response);
//   } catch (error) {
//     console.log('error', error);
//   }

//   // try {
//   //   return await axios.post(`${url}/add`, data);
//   // } catch (error) {
//   //   console.log('Error while calling addUser api', error);
//   // }
// };

// export const getUsers = async () => {
//   let options = {
//     url: 'http://localhost:8000/get',
//     method: 'get',
//     headers: { 'content-type': 'application/json' },
//   };

//   try {
//     let response = await axios(options);
//     return response;
//   } catch (error) {
//     console.log('error', error);
//   }

//   // try {
//   //   await axios.get(`${url}/all`);
//   // } catch (error) {
//   //   console.log('first');
//   // }
// };

// export const getUser = async (name) => {
//   let options = {
//     url: `http://localhost:8000/edit/${name}`,
//     method: 'get',
//     headers: { 'content-type': 'application/json' },
//   };
//   try {
//     let response = await axios(options);

//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const submitUser = async (user) => {
//   let options = {
//     url: `http://localhost:8000/update/${user.newId}`,
//     method: 'put',
//     headers: {
//       'content-type': 'application/json',
//     },
//     data: user,
//   };
//   try {
//     let response = await axios(options);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteUser = async (items) => {
//   console.log(items);
//   let options = {
//     url: `http://localhost:8000/delete/${items.newId}`,
//     method: 'delete',
//     headers: {
//       'content-type': 'application/json',
//     },
//   };
//   try {
//     let response = await axios(options);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
