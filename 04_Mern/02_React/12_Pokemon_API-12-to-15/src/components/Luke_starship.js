import React, { useState } from "react";

const DisplayStarship = (props) => {
    if (props.content.searchResult == null){
        return ( 
            <div></div>
            
        );
    }
    else {
        return (
            <div style={{textAlign: "left", marginLeft: "30%", marginTop: "30px"}}>
                <h2>{props.content.searchResult.name}</h2>
                <p><span style={{fontWeight:"bold"}}>Model: </span>{props.content.searchResult.model}</p>
                <p><span style={{fontWeight:"bold"}}> Manufacturer: </span>{props.content.searchResult.manufacturer}</p>
                <p><span style={{fontWeight:"bold"}}>Hyperdrive Rating: </span>{props.content.searchResult.hyperdrive_rating}</p>
                <p><span style={{fontWeight:"bold"}}>Cargo Capacity: </span>{props.content.searchResult.cargo_capacity}</p>
            </div>
        );
    }
   


};
export default DisplayStarship;