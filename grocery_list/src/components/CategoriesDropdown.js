import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './elements/Dropdown';

const CategoriesDropdown = ({options, onChange}) => {
  return (
    <div id='CategoriesDropdown'>
      <h4>View By Category</h4>
      <Dropdown name='Catgories' options={options} onChange={onChange} />
    </div>
  )
}

export default CategoriesDropdown;