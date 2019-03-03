import React from 'react';
import PropTypes from 'prop-types';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import CategoriesDropdownContainer from '../containers/CategoriesDropdownContainer';
import SortDropdownContainer from '../containers/SortDropdownContainer';

const Filters = () => {
  return (
    <div className='Filters'>
      <FilterLinkContainer filter='SHOW_ALL'>
        Show All 
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter='SHOW_PURCHASED'>
        Show Purchased
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter='SHOW_UNPURCHASED'>
        Show Unpurchased
      </FilterLinkContainer>
      {'  '}
      <CategoriesDropdownContainer />
      {'  '}
      <SortDropdownContainer />
      

    </div>
  )

}

export default Filters;