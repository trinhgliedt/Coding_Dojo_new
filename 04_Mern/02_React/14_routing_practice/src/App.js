import React from 'react';
// import logo from './logo.svg';
import { Link, Router} from '@reach/router';
import './App.css';
// import Pokemon from './components/pokemonAPI';
// import AxiosPokemon from './components/axiosPokemonAPI';
import Home from './view/Routing_Practice/home';
import BackgroundColor from './view/Routing_Practice/backgroundColor';



function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;
  
      <Router>
        <Home path="/home" />
        <BackgroundColor path="/:parameter" />
        <BackgroundColor path="/:parameter/:fColor/:bgColor" />
      </Router>
      {/* <Pokemon></Pokemon> */}
      {/* <AxiosPokemon></AxiosPokemon> */}
    </div>
  );
}

export default App;
