import { useState } from 'react';
import 

function SearchPokemon({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue); 
  };

  return (
    <div className='search__container'>
      <input
        type='text'
        placeholder='Rechercher un Pokémon'
        value={inputValue}
        onChange={handleInputChange}
        className='search__input'
      />
      <button onClick={handleSearchClick} className='search__button'>Search</button>
    </div>
  );
}

export default SearchPokemon;

  