import React from 'react';
import gyph from '../images/giphy-rick-and-morty.gif';

const CharacterDetail = (props) => {
  //función para los iconos del status
  const statusIcon = () => {
    if (props.status === 'unknown') {
      let icon;
      props.gender === 'Female' ? (icon = '🤷') : (icon = '🤷‍♂️');
      return icon;
    }
    if (props.status === 'Dead') return '💀';
    if (props.status === 'Alive') {
      let icon;
      props.gender === 'Female' ? (icon = '🙋') : (icon = '🙋‍♂️');
      return icon;
    }
  };

  //función para los iconos de la especie
  const speciesIcon = () => {
    if (props.species === 'Human') {
      let icon;
      props.gender === 'Female' ? (icon = '🧍‍♀️') : (icon = '🧍‍♂️');
      return icon;
    }
    if (props.species === 'Alien') return '👽';
  };

  return (
    <div>
      <section className='card-details character-box'>
        <img className='card__img' src={props.image} alt={props.name} />
        <div className='card-details-text'>
          <h2>{props.name}</h2>
          <ul>
            <li>
              Status:{' '}
              {props.status === 'unknown'
                ? statusIcon()
                : props.status + statusIcon()}
            </li>
            <li>
              Species: {props.species} {speciesIcon()}
            </li>
            <li>Origin: {props.origin}</li>
            <li>Episodes: {props.episode.length}</li>
          </ul>
        </div>
      </section>
      <div>
        <img className='gyph' src={gyph} alt='giphy-rick-and-morty' />
        <p>
          <b>
            <em>"Sometimes Science Is More Art Than Science, Morty."</em>
          </b>
        </p>
      </div>
    </div>
  );
};
export default CharacterDetail;
