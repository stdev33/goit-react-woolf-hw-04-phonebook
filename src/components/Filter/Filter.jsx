import React from 'react';
import css from './Filter.module.css';

function Filter({ value, onChange, isDisabled }) {
  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          className={css.filterInput}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
}

export default Filter;
