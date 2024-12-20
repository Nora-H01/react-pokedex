import { useState } from 'react';

function Filter({ setFilterCriteria }) {
  const [isOpen, setIsOpen] = useState(false); // show/hide panel
  const [selectedTypes, setSelectedTypes] = useState([]); 

  const pokemonTypes = [
    'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison',
    'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark',
    'steel', 'fairy'
  ];

  const handleTypeChange = (type) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };

  const applyFilters = () => {
    setFilterCriteria(selectedTypes);
    setIsOpen(false); // close panel
  };

  return (
    <div className="filter__container">
      <button onClick={() => setIsOpen((prev) => !prev)} className="filter__button">
        Filter
      </button>

      {isOpen && (
        <div className="filter__options">
          <h3>Types :</h3>
          <div className="types__list">
            {pokemonTypes.map((type) => (
              <label key={type} className="type__label">
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>

          <button onClick={applyFilters} className="filter__apply">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Filter;
