import './Card.scss';

const Card = (props) => {
  const { name, price, src, forBest, country} = props;

  const clazz = forBest ? 'card-opacity' : '' 
  const countryInfo = forBest ? '' : (<div className="card__country">{country}</div>);

  return (
    <li className={`card ${clazz}`}>
      <div className="card__img-wrap">
        <img src={src} alt={name} className="card__img" />
      </div>
      <div className="card__title">{name}</div>
      {countryInfo}
      <div className="card__price">{price}</div>
    </li>
  )
}

export default Card;
