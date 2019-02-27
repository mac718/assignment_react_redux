import {connect} from 'react-redux';
import List from '../components/List';
import {addItem} from '../actions';

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: data => dispatch(addItem(data))
//   } 
// }

const ListContainer = connect(
  mapStateToProps,
  null
)(List);

export default ListContainer;
