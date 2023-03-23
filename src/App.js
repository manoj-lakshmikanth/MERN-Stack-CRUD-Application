import { Routes, Route } from 'react-router-dom';
import LoginUser from './Components/LoginUser';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginUser />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/all" element={<AllUser />}></Route>
        <Route path="/read/:name" element={<EditUser />}></Route>
      </Routes>
    </div>
  );
};

export default App;

// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import AddUser from './Components/AddUser';
// import AllUser from './Components/AllUser';
// import CodeForInterview from './Components/CodeForInterview';
// import EditUser from './Components/EditUser';
// import NavBar from './Components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<CodeForInterview />} />
//         <Route path="/add" element={<AddUser />} />
//         <Route path="/all" element={<AllUser />} />
//         <Route path="/edit/:name" element={<EditUser />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
