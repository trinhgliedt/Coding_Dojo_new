import React, { useState } from "react";

const DisplayPlanet = (props) => {
    if (props.content.searchResult == null){
        return ( 
            <div></div>
            
        );
    }
    else {
        return (
            <div style={{textAlign: "left", marginLeft: "30%", marginTop: "30px"}}>
                <h2>{props.content.searchResult.name}</h2>
                <p><span style={{fontWeight:"bold"}}>Rotation Period: </span>{props.content.searchResult.rotation_period}</p>
                <p><span style={{fontWeight:"bold"}}> Orbital Period: </span>{props.content.searchResult.orbital_period}</p>
                <p><span style={{fontWeight:"bold"}}>Diameter: </span>{props.content.searchResult.diameter}</p>
                <p><span style={{fontWeight:"bold"}}>Population: </span>{props.content.searchResult.population}</p>
            </div>
        );
    }
   


};
export default DisplayPlanet;