import {connect} from 'react-redux';
import List from '../components/List';
import {addItem} from '../actions';
import {purchaseItem} from '../actions';

const mapStateToProps = state => {
  return {
    list: state.list
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
