
import React, {useState} from 'react';

import "./Navbar.css";

import { Navbar, 
         NavbarBrand, 
         NavLink,
         DropdownToggle,
         DropdownMenu,
         DropdownItem,
         Dropdown} from 'reactstrap';


const NavbarFunc = () => {

    // const [isOpen, setIsOpen] = useState(false);
    

    return (
        <Navbar dark expand="md">
            <NavbarBrand  className="logo" >
              <h5 style={{color: "black", opacity: 0.65}}>
                Urban Farms
              </h5>
            </NavbarBrand >

      {/*<NavLink>
                Home
            </NavLink>*/}
                
        {/*<Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} tag="div">
                <DropdownToggle tag="div">
                    <i className="fas fa-bars fa-2x"></i>
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem >
                        <div>
                            {"About"}
                        </div>
                    </DropdownItem >
                    <DropdownItem >
                        <div>
                            {"Contact"}
                        </div>
                    </DropdownItem >

                </DropdownMenu>
            </Dropdown> */}
        </Navbar>
    );

}
export default NavbarFunc
