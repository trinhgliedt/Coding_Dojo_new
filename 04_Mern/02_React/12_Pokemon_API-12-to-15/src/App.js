import React, { useState } from 'react';
import axios from 'axios';

// import logo from './logo.svg';
import { Link, Router, navigate, Redirect} from '@reach/router';
import './App.css';
// import Pokemon from './components/pokemonAPI';
// import AxiosPokemon from './components/axiosPokemonAPI';
// import Home from './view/Routing_Practice/home';
// import BackgroundColor from './view/Routing_Practice/backgroundColor';

import SearchBar from './components/LukeAPIWalker-search';
// import DisplayAPI from './components/LukeAPIWalker-display';
import DisplayCharacter from './components/Luke_character';
import DisplayPlanet from './components/Luke_planet';
import DisplayStarship from './components/Luke_starship';
import NotFound from './components/Luke_notFound';

// below is only for LukeAPIWalker
function App() {
    const [searchCategory, setSearchCategory] = useState("people");
    const [id, setId] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [homeWorld, setHomeWorld] = useState(null);
    

    function fetchAPI(searchCategory, id) {
      console.log("In fetch API");
      console.log("searchCategory:", searchCategory, ", id:", id);
      axios.get('https://swapi.dev/api/' + searchCategory + '/'+ id + '/')
          .then(response =>{
            setSearchResult(response.data);
            console.log("response.data:", response.data);
            if (searchCategory == "people"){
              fetchHomeWorld(response.data.homeworld);
            }
            navigate(`/${searchCategory}/${id}`);
          })
          .catch(response => {
            console.log("error response:", response);
            navigate(`/notfound`);
            
          })
          ;
        }
        
    function fetchHomeWorld(url){
        console.log("In fetchHomeWorld");
        axios.get(url)
        .then(response => {
          setHomeWorld(response.data);
        })
        ;
    }

    const displayContent = {searchResult, searchCategory, homeWorld };
    const content = {id, setId, searchCategory, setSearchCategory, fetchAPI};

  return (
    <div className="App">

        <SearchBar content={content}/>
      <Router>
        <DisplayCharacter path="/people/:id" content={displayContent}/>
        <DisplayPlanet path="/planets/:id" content={displayContent}/>
        <DisplayStarship path="/starships/:id" content={displayContent}/>
        <NotFound path="/notfound"/>
      </Router>

    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div className="App">
      {/* Routing Practice */}
      {/* <Link to="/home">Home</Link>{" "}&nbsp;{" "}&nbsp;{" "}&nbsp; */}
      {/* <Router>
        <Home path="/home" />
        <BackgroundColor path="/:parameter" />
        <BackgroundColor path="/:parameter/:fColor/:bgColor" />
      </Router> */}


      {/* <Pokemon></Pokemon> */}
      {/* <AxiosPokemon></AxiosPokemon> */}

    {/* </div>
  );
}
export default App; */}
