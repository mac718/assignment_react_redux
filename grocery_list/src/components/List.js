import React from 'react';
import PropTypes from 'prop-types';

const List = ({list, purchaseItem}) => {
  console.log(list)
  const listItems = list.map((item, i) => {
    if (!item.purchased) {
    return (
      <li key={i} className='list-group-item'>
        <input type='checkbox' className='purchased' onChange={() => {purchaseItem(item.id)}}/> {item.name}
      </li>
    )
  } else {
    return (
      <strike>
        <li key={i} className='list-group-item'>
          <input type='checkbox' className='purchased'onChange={() => {purchaseItem(item.id)}}/> {item.name}
        </li>
      </strike>
    )
  }
  })

  return (
    <div id='list'>
      <ul className='list-group'>{listItems}</ul>
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  purchaseItem: PropTypes.func.isRequired
}

export default List;