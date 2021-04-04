import React, { useState } from "react";

const DisplayAPI = (props) => {


    if (props.content.searchCategory == "people"){
        return (
            <div style={{textAlign: "left", marginLeft: "30%", marginTop: "30px"}}>
                <h2>{props.content.searchResult.name}</h2>
                <p><span style={{fontWeight:"bold"}}>Birth Year: </span>{props.content.searchResult.birth_year}</p>
                <p><span style={{fontWeight:"bold"}}>Height: </span>{props.content.searchResult.height}</p>
                <p><span style={{fontWeight:"bold"}}>Mass: </span>{props.content.searchResult.mass}</p>
                <p><span style={{fontWeight:"bold"}}>Eye Color: </span>{props.content.searchResult.eye_color}</p>
            </div>
        );
    }
    if (props.content.searchCategory == "planets"){
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
    if (props.content.searchCategory == "starships"){
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

    // {Object.entries(props.content).map(([key, val]) => {
    //     return (
    //         <div>
    //             <h2>{props.content.name}</h2>
    //             <p>{ key }:{ val } </p>
    //         </div>
    //     );}
    //     )}

    //      <div>
    //         <h1>{id}: { name }</h1>
    //         <div>
    //             {Object.entries(display).slice(0,4).map(([key, val]) => {
    //                 return(<p key={key}>{key}: {val}</p>);
    //             })}
    //         </div>
    //         {(category==="people" && homeworld !=null) && <p>Homeworld: {homeworld.name}</p>}
    //      </div>

};
export default DisplayAPI;