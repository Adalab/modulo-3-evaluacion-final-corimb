import React from 'react';

const Filter = (props) => {
  //pasar el valor del input al estado
  const handleFilterName = (ev) => {
    props.handleFilter({
      key: 'filterName',
      value: ev.target.value,
    });
  };

  const handleFilterSpecies = (ev) => {
    props.handleFilter({
      key: 'filterSpecies',
      value: ev.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className='search-input'>
        <label htmlFor='filterName'>
          <b>Search character</b>
        </label>
        <input
          type='text'
          id='filterName'
          placeholder='ej. Rick'
          value={props.filterName}
          onChange={handleFilterName}
        />
      </div>
      <div>
        <label htmlFor='filterSpecies'>Species</label>
        <select
          id='filterSpecies'
          value={props.filterSpecies}
          onChange={handleFilterSpecies}
        >
          <option value='all'>All</option>
          <option value='Human'>Human</option>
          <option value='Alien'>Alien</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
