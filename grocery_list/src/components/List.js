import React from 'react';
import PropTypes from 'prop-types';

const List = ({list, purchaseItem}) => {
  const listItems = list.map((item, i) => {
    if (!item.purchased) {
    return (
      <li key={i}><input type='checkbox' onChange={() => {purchaseItem(item.id)}}/> {item.name}</li>
    )
  } else {
    return (
      <strike><li key={i}><input type='checkbox' onChange={() => {purchaseItem(item.id)}}/> {item.name}</li></strike>
    )
  }
  })

  return (
    <div id='list'>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List;