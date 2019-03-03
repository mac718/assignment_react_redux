import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './elements/Dropdown';

const CategoriesDropdown = ({options, onChange}) => {
  return (
    <Dropdown name='Catgories' options={options} onChange={onChange} />
  )
}

export default CategoriesDropdown;