import React, { useState } from "react";

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    
    function fetchPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then(response => response.json())
            .then(response => setPokemons(response.results))

    }
    //UseEffect can be used to load the API at page load. For this assignment since we have a button to fetch the API there's no need to use UseEffect
    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
    //         .then(response => response.json())
    //         .then(response => setPokemons(response.results))
    // }, []);
 
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
export default Pokemon;
