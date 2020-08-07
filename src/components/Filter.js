import React from 'react';

const Filter = (props) => {
  const handleFilterName = (ev) => {
    props.handleFilter({
      key: 'filterName',
      value: ev.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='border--medium m-0 mb-1 mt-1 col2'
    >
      <div>
        <label htmlFor='filterName' className='form__label '>
          Filtrar por nombre
        </label>
        <input
          type='text'
          className='form__input-text'
          id='filterName'
          value={props.filterName}
          onChange={handleFilterName}
        />
      </div>
    </form>
  );
};

export default Filter;
