
import React, {useState} from 'react';
// import Navbar from './components/Navbar'
// import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';


import {  
  HashRouter, 
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route 
              path="/about"
              element={<About />}
            />
            {/*<Route 
              path="Products"
              element={<Products />}
            />*/}

          </Route>
        </Routes>
      </HashRouter>
      <Footer />
    </>
  )
}

// function App() {
  
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navbar />}>
//             <Route index element={<Home />} />
//             <Route 
//               path="About"
//               element={<About />}
//             />
//             <Route 
//               path="Products"
//               element={<Products />}
//             />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   )
// }

export default App;
