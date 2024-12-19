import { useState } from 'react';
import PokemonList from './components/PokemonList.jsx';
import SearchPokemon from './components/SearchPokemon.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // État partagé

  return (
    <>
      <header>
        <SearchPokemon setSearchTerm={setSearchTerm} />
      </header>
      <section className='section'>
        <PokemonList searchTerm={searchTerm} />
      </section>
    </>
  );
}

export default App;
