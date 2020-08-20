import React, { useState } from 'react';
import PokemonList from './components/PokemonList.js'

function App()  {
  const [pokemon, setPokemon] = useState(["bulbasaur, charmander"])
  
  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
