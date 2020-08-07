import React, { Component } from 'react';

class PokemonList extends Component {
  render() {
    return this.props.pokemon.map((pokemon) => (
      <h3>{ pokemon.title }</h3>
    ));
  }
};

export default PokemonList;
