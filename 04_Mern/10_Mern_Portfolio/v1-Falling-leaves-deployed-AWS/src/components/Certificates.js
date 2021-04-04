

import React from "react";
import "../styles/CertificatesStyles.css";
import dojoCert from "../images/cert_Dojo.JPG";
import cpaCert from "../images/cert_CPA.jpg";
import awsCert from "../images/cert_AWS.JPG";

function Certificates() {

  return (
    <div className="certContainer ml-4 ml-3 mt-2 pl-5 pt-4">
    <img className="certImg" id="cpaCert" 
    src={cpaCert} alt="cpaCert"></img>
    <img className="certImg" id="dojoCert" 
    src={dojoCert} alt="dojoCert"></img>
    <img className="certImg" id="awsCert" 
    src={awsCert} alt="awsCert"></img>
    </div>
  );
}
export default Certificates;