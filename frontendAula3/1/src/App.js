import React from "react";
import Pokemon from "./components/Pokemon";
import pokemonList from "./data";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemonList,
      value: "",
    };

    this.fiterPokemon = this.fiterPokemon.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  fiterPokemon(search) {
    if (search) {
      const newpokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      this.setState({ pokemons: newpokemonList });
    } else {
      this.setState({ pokemons: pokemonList });
    }
  }

  changeValue(event) {
    this.setState({ value: event.target.value }, () =>
      this.fiterPokemon(this.state.value)
    );
  }

  render() {
    const { pokemons, value } = this.state;
    return (
      <div className="container">
        <input onChange={this.changeValue} type="text" value={value}></input>
        <div className="card-content">
          {pokemons.map((pokemon) => (
           <Pokemon key={ pokemon.id } pokemon={ pokemon } />
          ))}
        </div>
      </div>
    );
  }
}

export default App;