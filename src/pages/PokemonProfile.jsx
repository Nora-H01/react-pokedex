import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PkmnType from '../components/PkmnType.jsx';

function PokemonProfile() {
  const { pokemon } = useParams();
  const [pkmnProfile, setPkmnProfile] = useState(null);
  const [pkmnSpecies, setPkmnSpecies] = useState(null);

  useEffect(() => {
    async function fetchOnePokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        );

        const profile = await response.json();

        setPkmnProfile(profile);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchPokemonSpecies() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`,
        );

        const species = await response.json();

        setPkmnSpecies(species);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOnePokemon();
    fetchPokemonSpecies();
  });

  if (pkmnProfile) {
    return (
      <>
        <header className='profile__header'>
          <div className='profile__header__portraitContainer'>
            <img
              src={pkmnProfile.sprites.other['official-artwork'].front_default}
              alt={`${pkmnProfile.name} official artwork portrait`}
              className='profile__header__portrait'
            />
          </div>
          <h1 className='profile__header__name'>
            {pkmnProfile.name.charAt(0).toUpperCase() +
              pkmnProfile.name.slice(1)}
          </h1>
          <p className='profile__header__id'>000{pkmnProfile.id}</p>
        </header>
        <section className='profile__stats'>
          <div className='profile__statsContainer'>
            <div className='profile__stats__abilities'>
              <h2>Abilities</h2>
              <div className='dataSheet'>
                {pkmnProfile.abilities.map((ability) => (
                  <p>{ability.ability.name}</p>
                ))}
              </div>
            </div>
            <div className='profile__stats__weaknesses'>
              <h2>Weaknesses</h2>
              <div className='dataSheet'></div>
            </div>
            <div className='profile__stats__resistances'>
              <h2>Resistances</h2>
              <div className='dataSheet'></div>
            </div>
            <div className='profile__stats__stats'>
              <h2>Stats</h2>
              <div className='dataSheet'>
                {pkmnProfile.stats.map((stat) => (
                  <p>
                    {stat.stat.name} : {stat.base_stat}
                  </p>
                ))}
              </div>
            </div>
            <div className='profile__stats__details'>
              <h2>Details</h2>
              <div className='dataSheet'>
                <p>Capture rate : {pkmnSpecies.capture_rate}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    <h1>C'est pété</h1>;
  }
}

export default PokemonProfile;
