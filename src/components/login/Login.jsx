import React from 'react';
import './Login.css';
import logo from '../../images/argeo-dark.svg';

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authentication/authConfig";


import {
  Button,
  Form,
  DropdownItem
} from 'reactstrap';


export function Login() {

  const { instance } = useMsal();

  const handleLogin = () => {
      // instance.loginRedirect(loginRequest).catch(e => {
      //     console.log(e);
      // });
      
  }

  return(
    <div className="login-bg">
      <Form inline  className='login-form'>
        <img src={logo} alt="Argeo logo" />
        <Button onClick={() => handleLogin()} >
          Log in
        </Button>
      </Form>
    </div>
  )

}



export function Logout() {


  const { instance } = useMsal();

  const handleLogout = () => {
      instance.logoutRedirect({
          postLogoutRedirectUri: "/",
      });
  }

  return(
      <DropdownItem onClick={() => handleLogout()} color="primary" >
        Log out
      </DropdownItem>
  )
}
