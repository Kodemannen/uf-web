import React from 'react';
import '../App.css';


// From stackoverflow:
// Include a phantom div in your footer component that 
// represents the footer's position that other dom elements 
// will respect (i.e. affecting page flow by not being position: 'fixed';).



const height = "200px"
const padding = "50px"

var style = {
  backgroundColor: "#fff",
  // backgroundColor: "#F8F8F8",
  // borderTop: "0px solid #E7E7E7",
  textAlign: "center",
  padding: padding,
  // position: "fixed",
  left: "0",
  bottom: "0",
  height: height,
  width: "100%",
}
var phantom = {
  display: 'block',
  padding: padding,
  height: height,
  width: '100%',
}


const FooterContent = () => {
  return (
    <div>
      <h5>
        Contact
      </h5>
      <p>
        Bjørn Ingeberg Fesche, CEO <br />
        urbanfarms.as@gmail.com <br />
        +47 994 44 992 <br />
      </p>
    </div>
  )
}



function Footer({children}) {
  return (
    <div >
        <div style={style}>
          <FooterContent />
        </div>
    </div>
  );
}

// function Footer({children}) {
//   return (
//     <div >
//         <div style={phantom} />
//         <div style={style}>
//           { children }
//           <FooterContent />
//         </div>
//     </div>
//   );
// }


export default Footer;
//
// Urban Farms are utilizing autonomous biological processes together with the latest in photon generating technology to transform the Norwegian pak choi industry
//
// Urban Farms are utilizing the latest in photon generating technology together with fully autonomous biological processes to transform the Norwegian pak choi industry
