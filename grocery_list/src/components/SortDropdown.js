import React from 'react';
import Dropdown from './elements/Dropdown';
import PropTypes from 'prop-types';

const SortDropdown = ({onChange}) => {
  return (
    <div id='SortDropdown'>
      <h4>Sort By Item Name</h4>
      <Dropdown name='Sort' options={['unsorted', 'ascending', 'descending']} onChange={onChange} />
    </div>
  )
}

SortDropdown.propTypes = {
  onChange: PropTypes.func
}

export default SortDropdown;