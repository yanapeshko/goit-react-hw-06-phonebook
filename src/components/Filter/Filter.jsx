import React from 'react';
import { useSelector } from 'react-redux';
import s from './Filter.module.css';
import { PropTypes } from 'prop-types';

function Filter({ onFilterChange }) {
  const filter = useSelector(state => state.contacts.filter);
  return (
    <label className={s.filter_label}>
      Find contacts by name:
      <input
        className={s.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
