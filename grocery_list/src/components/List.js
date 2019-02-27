import React from 'react';
import PropTypes from 'prop-types';

const List = ({list}) => {
  const listItems = list.map((item, i) => {
    return <li key={i}>{item.name}</li>
  })

  return (
    <div id='list'>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List;