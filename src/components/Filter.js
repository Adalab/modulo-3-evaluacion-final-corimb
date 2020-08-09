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
    </form>
  );
};

export default Filter;
