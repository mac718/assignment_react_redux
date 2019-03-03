import {connect} from 'react-redux';
import SortDropdown from '../components/SortDropdown';
import {setSortType} from '../actions';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     options: ownProps.options
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      console.log(e.target.value)
      dispatch(setSortType(e.target.value))
    }
  }
}

const SortDropdownContainer = connect(
  null,
  mapDispatchToProps
)(SortDropdown);

export default SortDropdownContainer;