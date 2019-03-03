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
    case 'fruit/veg':
      return items.filter(item => item.category === 'fruit/veg')
    case 'meat':
      return items.filter(item => item.category === 'meat')
    case 'booze':
      return items.filter(item => item.category === 'booze')
    case 'ascending':
      return items.concat().sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();  
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }) 
    case 'descending':
      return items.concat().sort((a, b) => {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      }) 
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
