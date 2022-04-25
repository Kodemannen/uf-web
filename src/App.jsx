import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';


import {  
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/uf-web" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route 
              path="/uf-web/about"
              element={<About />}
            />
            {/*<Route 
              path="Products"
              element={<Products />}
            />*/}

          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}


export default App;
