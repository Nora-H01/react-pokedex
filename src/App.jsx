import { useState } from 'react';
import PokemonList from './components/PokemonList.jsx';
import SearchPokemon from './components/SearchPokemon.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState([]); // État pour le filtre des types

  return (
    <>
      <header>
        <h1>Nav</h1>
        <SearchPokemon setSearchTerm={setSearchTerm} />
        <Filter setFilterCriteria={setFilterCriteria} />
      </header>
      <section className='section'>
        <PokemonList searchTerm={searchTerm} filterCriteria={filterCriteria} />
      </section>
    </>
  );
}

export default App;
