import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({name, options, onChange}) => {
  const dropOptions = options.map((option, i) => {
    return <option key={i} value={option}>{option}</option>
  })

  return (
    <select name={name} onChange={onChange}>
      <option value='all'>All</option>
      {dropOptions}
    </select>
  )
}

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
}

export default Dropdown;