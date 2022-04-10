
import React, {useState} from 'react';
// import Navbar from './components/Navbar'
// import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './theme.css';

// <Routes> used to be <Switch> 

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// bruk react router for å lage flere sider

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;
