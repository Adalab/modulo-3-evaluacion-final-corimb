import React from 'react';

const Character = (props) => {
  console.log(props);
  return (
    <article className='card'>
      <img src={props.image} className='card__img' alt={props.name} />
      <h3 className='card__title'>{props.name}</h3>
      <p className='card__description'>{props.species}</p>
      <a href={`/product/${props.id}`} className='card__btn'>
        Ver detalle del personaje
      </a>
    </article>
  );
};
export default Character;
