
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import About from "./components/React-Router-Hooks/About";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import Products from "./components/React-Router-Hooks/Products";
// import Home from "./components/React-Router-Hooks/Home";
import PageNotFound from "./components/React-Router-Hooks/PageNotFound";
import { useParams } from 'react-router-dom';
import Layout from "./components/React-Router-Hooks/Layout";
import About from "./components/React-Router/About";
import Home from "./components/React-Router/Home";
import Users from "./components/React-Router/Users";


// React-Router 
function App() {
  return (
    <div>
       <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Project Mgmt</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={ <About/>}></Route>
          <Route path="/users" element={ <Users/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}



// The following two functions are the example of React-Router 
// function Layout() {
//   return (
//     <>
//       <Navbar bg="dark" expand="sm" variant="dark">
//         <Nav>
//         <LinkContainer to="/">
//           <Nav.Link>Home</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/about">
//           <Nav.Link>About</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/products">
//           <Nav.Link>Products</Nav.Link>
//         </LinkContainer>
//         </Nav>
//       </Navbar>
//       <main>

//         <Outlet></Outlet>
//       </main>

    
//     </>
//     );
// }

// This function is the example of Layout for React-Router-Hooks deck
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }


// These two functions are created for React-Router : 
// function User() {
//   const { name } = useParams();
//   return <div>User Name: {name}</div>;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/users/:name" element={<User />}></Route>
//       </Routes>
//     </Router>
//   );
// }



export default App;
