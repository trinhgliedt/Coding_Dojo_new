// import axios from 'axios';
import React, { useState } from "react";


const SearchBar = (props, {searchCategory="people", id=null}) => {
    if (props.content == null) {
        return ( 
            <div></div>
        );
    }
    else {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <label style={{marginRight: "10px"}}>Search for:</label>
                <select 
                onChange = {(e) => {props.content.setSearchCategory(e.target.value);}}
                value = {props.searchCategory}>
                    <option >people</option>
                    <option>planets</option>
                    <option>starships</option>
                </select>
                <label style={{marginRight: "10px", marginLeft: "50px"}}>ID:</label>
                <input 
                onChange = {(e) => {props.content.setId(e.target.value);}} 
                style={{width: "50px", marginRight: "50px"}} type="number" min="1"
                value = {props.id}/>
                {/* <button 
                onClick = { props.content.fetchAPI(props.content.searchCategory, props.content.id)}
                >Search</button> */}
                <button 
                onClick = {(e) => props.content.fetchAPI(props.content.searchCategory, props.content.id)}
                >Search</button>
            </div>
        );
    }
};
export default SearchBar;
