import axios from 'axios';
import React, { useState } from "react";

const AxiosPokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    
    function fetchPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response => setPokemons(response.data.results))

    }

    return (
        <div>
            <button onClick = {fetchPokemon}>Fetch Pokemon</button>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (
                    <p key={index}>{index+1}. {pokemon.name}</p>
                )
            })}
        </div>
    );
}
export default AxiosPokemon;
