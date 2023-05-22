import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <p>Filter contacts</p>
      <input
        type="text"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
};

export default Filter;
