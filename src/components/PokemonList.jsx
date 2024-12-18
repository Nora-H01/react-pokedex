import { useState, useEffect } from 'react';
import PokemonCard from './Card.jsx';

function PokemonList() {
  const [pkmnList, setPkmnList] = useState([]);
  useEffect(() => {
    async function fetchPokemonNames() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=50',
      );
      const data = await response.json();

      const names = [];

      data.results.map((item) => {
        names.push(item.name);
      });

      return names;
    }

    async function fetchPokemon() {
      const pokemons = await fetchPokemonNames();
      for (let i = 0; i <= pokemons.length - 1; i++) {
        let response;
        response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemons[i]}`,
        );

        const pokemonJSON = await response.json();

        const pokemon = {
          id: pokemonJSON.id,
          portrait:
            pokemonJSON.sprites.other['official-artwork']['front_default'],
          name: pokemonJSON.name,
          types: pokemonJSON.types,
        };

        setPkmnList((prev) => [...prev, pokemon]);
      }
    }

    fetchPokemon();
    console.log(pkmnList);
  }, []);

  return (
    <div className='card__container --list'>
      {pkmnList.map((pkmn) => (
        <PokemonCard
          key={pkmn.name}
          id={pkmn.id}
          portrait={pkmn.portrait}
          name={pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
          // region='Kantoh'
          // generation='1'
          types={pkmn.types}
        />
      ))}
    </div>
  );
}
export default PokemonList;
