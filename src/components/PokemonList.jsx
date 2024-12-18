import { useState, useEffect } from 'react';
import PokemonCard from './Card.jsx';

function PokemonList() {
  const [pkmnList, setPkmnList] = useState([]);
  useEffect(() => {
    async function fetchPokemonNames() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      );
      const data = await response.json();
      setPkmnList(data.results);
    }

    fetchPokemonNames();
    // async function fetchPokemon() {
    //   const response = await fetch('https://pokeapi.co/api/v2/pokemon/{id or name}/');
    // }
  }, []);

  return (
    <div className='card__container --list'>
      <PokemonCard />
      {pkmnList.map((pkmn) => (
        <p key={pkmn.name}>{pkmn.name}</p>
      ))}
    </div>
  );
}
export default PokemonList;
