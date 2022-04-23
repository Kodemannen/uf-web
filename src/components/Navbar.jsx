
import React, {useState} from 'react';

import "./../App.css";
import Colors from './Colors.jsx';

import { Nav, 
         Navbar, 
         NavbarBrand, 
         NavLink,
         Container,
         NavItem,
         } from 'reactstrap';

import {  
  Outlet,
  Link
} from "react-router-dom";

const NavbarFunc = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    // const style={color: "black", opacity: 0.65, }
    const style={color: Colors.c2, }

    return (
      <>
      <Navbar sticky="top" >
          <NavbarBrand  href="/"  style={style} className="logo" >
            Urban Farms
          </NavbarBrand >

          <Nav>
            <NavItem>
              <NavLink style={style} href="/about" className="navLink">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled style={style} href="/products" className="navLink">
                Products
              </NavLink>
            </NavItem>
          </Nav>

      </Navbar>
      <Outlet />
      </>
    );

}

export default NavbarFunc



// import { Nav, 
//          Navbar, 
//          NavbarBrand, 
//          NavLink,
//          Container,
//          Row,
//          Col,
//          NavItem,
//          DropdownToggle,
//          DropdownMenu,
//          DropdownItem,
//          Dropdown} from 'reactstrap';





// const NavbarFunc = (props) => {

//     // const [isOpen, setIsOpen] = useState(false);
//     const style={color: "black", opacity: 0.65, }

//     return (
//         <Navbar dark expand="md">
//           <NavbarBrand  style={style} className="logo" >
//               Urban Farms
//           </NavbarBrand >

//           <Container fluid="md" >
//             <Row >
//               <Col >
//                 <NavLink style={style} >
//                   About
//                 </NavLink>
//               </Col >
//               <Col >
//                 <NavLink style={style} >
//                   Order
//                 </NavLink>
//               </Col>
//             </Row>
//           </Container>
                
//         </Navbar>
//     );

// }

// export default NavbarFunc
