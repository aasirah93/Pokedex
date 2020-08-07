import React, { Component } from 'react';
import PokemonList from './components/PokemonList';

class App extends Component {
  state = {
    pokemon: [
      {
        title: "bulbasaur", 
      },
      {
        title:
        "charmander"
      }
    ]
  }

  render() {
    return (
      <div>
        <PokemonList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
