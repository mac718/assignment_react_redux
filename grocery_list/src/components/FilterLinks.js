import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = ({onClick, active, children}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href='#' onClick={onClick}>{children}</a>
  )
}

export default FilterLink; 