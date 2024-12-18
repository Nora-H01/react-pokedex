async function PokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
  let pkmnList = await response.json();

  pkmnList = pkmnList.results;

  console.log(pkmnList);

  return (
    <div className='pokemon__container --list'>
      {pkmnList.results.map((pkmnSubList) => {
        console.log(pkmnSubList);
        pkmnSubList.map((pkmn) => {
          return <p>{pkmn.name}</p>;
        });
      })}
    </div>
  );
}

export default PokemonList;
