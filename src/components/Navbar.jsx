
import React, {useState} from 'react';

import "./Navbar.css";

import { Nav, 
         Navbar, 
         NavbarBrand, 
         NavLink,
         Container,
         Row,
         Col,
         NavItem,
         DropdownToggle,
         DropdownMenu,
         DropdownItem,
         Dropdown} from 'reactstrap';

const NavbarFunc = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    const style={color: "black", opacity: 0.65, }

    return (
      <Navbar dark expand="md">
          <NavbarBrand  href="/"  style={style} className="logo" >
              Urban Farms
          </NavbarBrand >

          <Nav>

            <Row>
              <Col>
              <NavItem>
                <NavLink href="/about" className="navLink">
                  About
                </NavLink>
              </NavItem>
              </Col>

              <Col>
              <NavItem>
                <NavLink href="/products" className="navLink">
                  Products
                </NavLink>
              </NavItem>
              </Col>
            </Row>


          </Nav>

      </Navbar>

    );

}

export default NavbarFunc




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
