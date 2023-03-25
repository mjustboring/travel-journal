import './Card.css'
import marker from '../images/marker.svg'

function Card({name, location, description, link, date, img}) {
  
  return (
    <div className='card'>
      <img src={require(`../images/${img}`)} alt='' className='img' />
      <div className='info'>
        <h6 className='location'>
          <img src={marker} alt='' className='marker' />
          {location}
          <a href={link} className='link'>
            Google Maps
          </a>
        </h6>
        <h4 className='name'>
          {name}
        </h4>
        <h5 className='date'>{date}</h5>
        <p className='description'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
