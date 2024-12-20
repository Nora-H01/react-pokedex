import PkmnType from './PkmnType.jsx';
import FavoriteButton from './FavoriteButton.jsx';

function Card(props) {
  let id = props.id;
  let portrait = props.portrait;
  let name = props.name;
  let types = props.types;
  let region = props.region;
  let generation = props.generation;

  return (
    <div className='card --list'>
      <div className='card__pkmnData__portraitContainer'>
        <img
          className='card__pkmnData__portrait'
          src={portrait}
          alt={`${name} photo`}
        />
      </div>
      <div className='card__pkmnData'>
        <span className='card__pkmnData__id'>{id}</span>
        <h3 className='card__pkmnData__name'>{name}</h3>
        <div className='card__pkmnData__types'>
          {types.map((type) => {
            return <PkmnType type={type} />
          })}
        </div>
        <div className='card__pkmnData__meta'>
          {/*<span className='card__pkmnData__meta__region'>{region}</span>*/}
          {/*<span className='card__pkmnData__meta__generation'>{generation}</span>*/}
        </div>
      </div>
      <FavoriteButton />  
    </div>
  );
}

export default Card;
