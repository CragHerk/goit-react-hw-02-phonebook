// Filter.jsx
import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      Filter contacts
      <br />
      <input
        type="text"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
};

export default Filter;
