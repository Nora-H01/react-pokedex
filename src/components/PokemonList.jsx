import { useState, useEffect } from 'react';
import PokemonCard from './Card.jsx';

function PokemonList({ searchTerm }) {
  const [pkmnList, setPkmnList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();

        const detailedPokemonList = await Promise.all(
          data.results.map(async (item) => {
            const res = await fetch(item.url);
            const pokemonData = await res.json();

            return {
              id: pokemonData.id,
              portrait: pokemonData.sprites.other['official-artwork'].front_default,
              name: pokemonData.name,
              types: pokemonData.types.map((type) => type.type.name), 
            };
          }),
        );

        setPkmnList(detailedPokemonList);
      } catch (error) {
        console.error('Erreur lors du fetch des Pokémon:', error);
      }
    }

    fetchPokemon();
  }, []);

  const filteredPkmns = pkmnList.filter((pkmn) =>
    pkmn.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredPkmns.length === 0) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className='card__container --list'>
      {filteredPkmns.map((pkmn) => (
        <PokemonCard
          key={pkmn.id}
          id={pkmn.id}
          portrait={pkmn.portrait}
          name={pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
          types={pkmn.types}
        />
      ))}
    </div>
  );
}

export default PokemonList;
