

import React from "react";
import "../styles/CertificatesStyles.css";
import dojoCert from "../images/cert_Dojo.JPG";
import cpaCert from "../images/cert_CPA.jpg";

function Certificates() {

  return (
    <div className="certContainer ml-4 ml-3 mt-2 pl-5 pt-4">
    <img id="image1" 
    src={cpaCert} alt="image1"></img>
    <img id="image2" 
    src={dojoCert} alt="image2"></img>

    </div>
  );
}
export default Certificates;