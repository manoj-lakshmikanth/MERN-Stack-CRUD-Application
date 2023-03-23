import { AppBar, styled, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

let Navheading = styled(AppBar)`
  background: #000000;
`;

let Navig = styled(NavLink)`
  color: inherit;
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <div className="App">
      <Navheading position="static">
        <Toolbar>
          <Navig to="/">Code For Interview</Navig>
          <Navig to="/add">Add User</Navig>
          <Navig to="/all">All User</Navig>
        </Toolbar>
      </Navheading>
    </div>
  );
};

export default Navbar;

// import { AppBar, Toolbar, styled } from '@mui/material';
// import { NavLink } from 'react-router-dom';

// let Header = styled(AppBar)`
//   background: #111111;
// `;

// let Tabs = styled(NavLink)`
//   font-size: 20px;
//   margin-right: 20px;
//   color: inherit;
//   text-decoration: none;
// `;

// function NavBar() {
//   return (
//     <div className="App">
//       <Header position="static">
//         <Toolbar>
//           <Tabs to="/">Code for interview</Tabs>
//           <Tabs to="/add">Add User</Tabs>
//           <Tabs to="/all">All User</Tabs>
//         </Toolbar>
//       </Header>
//     </div>
//   );
// }

// export default NavBar;
