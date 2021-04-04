import React from "react";

function BackgroundColor({parameter, fColor="black", bgColor="white"}){
    const inlineStyle = {
        color: fColor,
        backgroundColor: bgColor,
        padding: "20px 0",
        border: "1px solid black",
        marginTop: 20,
    };

    if (isNaN(+parameter)){
        return (
        <div style={inlineStyle}>The word is: {parameter}.</div>
        );
    }
    else {
        return (
            <div style={inlineStyle}>The number is: {parameter}.</div>
            );
    }
}
export default BackgroundColor;