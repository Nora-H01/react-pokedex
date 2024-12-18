import { useState, useEffect } from 'react'
import PokemonCard from './Card.jsx'

function PokemonList() {
  const [pkmnList, setPkmnList] = useState([])
  useEffect(() => {
    async function fetchPokemonNames() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()
      setPkmnList(data.results)
    }

    fetchPokemonNames()
    // async function fetchPokemon() {
    //   const response = await fetch('https://pokeapi.co/api/v2/pokemon/{id or name}/');
    // }
  }, [])

  return (
    <div className='card__container --list'>
      {pkmnList.map((pkmn) => (
        <PokemonCard
          key={pkmn.name}
          id='0001'
          portrait='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          name={pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
          region='Kantoh'
          generation='1'
          types={['Poison', 'Plant']}
        />
      ))}
    </div>
  )
}
export default PokemonList
