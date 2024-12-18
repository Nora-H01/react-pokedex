function Card(props) {
  // const pokemon = props.pokemon;

  return (
    <div className='card --list'>
      <div className='card__pkmnData__portraitContainer'>
        <img
          className='card__pkmnData__portrait'
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        />
      </div>
      <div className='card__pkmnData'>
        <span className='card__pkmnData__id'>0001</span>
        <h3 className='card__pkmnData__name'>Nom pokémon</h3>
        <div className='card__pkmnData__types'>
          <span className='card__pkmnData__types__type'>Feu</span>
          <span className='card__pkmnData__types__type'>Air</span>
        </div>
        <div className='card__pkmnData__meta'>
          <span className='card__pkmnData__meta__region'>Région</span>{' '}
          <span className='card__pkmnData__meta__generation'>Génération</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
