function PkmnType(props) {
  let type = props.type
  return <span className='card__pkmnData__types__type' style={{backgroundColor:`var(--color-${type})`}}>{type}</span>
}

export default PkmnType