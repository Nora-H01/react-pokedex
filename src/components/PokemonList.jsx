import { useState, useEffect } from 'react';
import PokemonCard from './Card.jsx';
import { NavLink, useNavigate } from 'react-router';

function PokemonList() {
  const [pkmnList, setPkmnList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokemon() {
      try {
        // List
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=20',
        );
        const data = await response.json();

        // Promise.all
        const detailedPokemonList = await Promise.all(
          data.results.map(async (item) => {
            const res = await fetch(item.url);
            const pokemonData = await res.json();

            return {
              id: pokemonData.id,
              portrait:
                pokemonData.sprites.other['official-artwork'].front_default,
              name: pokemonData.name,
              types: pokemonData.types.map((type) => type.type.name),
            };
          }),
        );

        // update
        setPkmnList(detailedPokemonList);
      } catch (error) {
        console.error('Erreur lors du fetch des Pokémon:', error);
      }
    }

    fetchPokemon();
  }, []);

  function seePokemonProfile(name) {
    navigate(`/pokemons/${name}`);
  }

  return (
    <div className='card__container --list'>
      {pkmnList.map((pkmn) => (
        <NavLink to={`/pokemons/${pkmn.name}`}>
          <PokemonCard
            key={pkmn.name}
            id={pkmn.id}
            portrait={pkmn.portrait}
            name={pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
            types={pkmn.types}
            onClick={() => seePokemonProfile(pkmn.name)}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default PokemonList;
