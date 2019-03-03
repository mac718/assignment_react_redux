import {connect} from 'react-redux';
import CategoriesDropdown from '../components/CategoriesDropdown';
import {setCategoryFilter} from '../actions';

const mapStateToProps = state => {
  return {
    options: state.list.map(item => {
      return item.category;
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      console.log(e.target.value)
      dispatch(setCategoryFilter(e.target.value))
    }
  }
}

const CategoriesDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesDropdown);

export default CategoriesDropdownContainer; 