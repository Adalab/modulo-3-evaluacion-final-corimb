import React from 'react';

const CharacterDetail = (props) => {
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

  const speciesIcon = () => {
    if (props.species === 'Human') {
      let icon;
      props.gender === 'Female' ? (icon = '🧍‍♀️') : (icon = '🧍‍♂️');
      return icon;
    }
    if (props.species === 'Alien') return '👽';
  };

  const handleDetailClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <div onClick={handleDetailClick}>
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
    </div>
  );
};
export default CharacterDetail;
