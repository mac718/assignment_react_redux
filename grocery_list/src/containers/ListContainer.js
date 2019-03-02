import {connect} from 'react-redux';
import List from '../components/List';
import {addItem} from '../actions';
import {purchaseItem} from '../actions';

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_PURCHASED':
      return items.filter(item => item.purchased)
    case 'SHOW_UNPURCHASED':
      return items.filter(item => !item.purchased)
    default:
      return items;
  }
}

const mapStateToProps = state => {
  return {
    list: getVisibleItems(state.list, state.listFilters)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    purchaseItem: id => {
      dispatch(purchaseItem(id))
    }
  } 
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
