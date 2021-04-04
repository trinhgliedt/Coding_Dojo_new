import React, { useState} from "react";

const DisplayCharacter = (props) => {
    if (props.content.searchResult == null ){
        return ( 
            <div></div>
            
        );
    }
    else {
        if(props.content.homeWorld == null){
            return (
                <div> ..... Retrieving information</div>
            );
        }
        else {
            return (
                <div style={{textAlign: "left", marginLeft: "30%", marginTop: "30px"}}>
                    <h2>{props.content.searchResult.name}</h2>
                    <p><span style={{fontWeight:"bold"}}>Birth Year: </span>{props.content.searchResult.birth_year}</p>
                    <p><span style={{fontWeight:"bold"}}>Height: </span>{props.content.searchResult.height}</p>
                    <p><span style={{fontWeight:"bold"}}>Mass: </span>{props.content.searchResult.mass}</p>
                    <p><span style={{fontWeight:"bold"}}>Eye Color: </span>{props.content.searchResult.eye_color}</p>
                    <p><span style={{fontWeight:"bold"}}>Home World: </span>{props.content.homeWorld.name}</p>
                </div>
            );
        }

    }
   


};
export default DisplayCharacter;