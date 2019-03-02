import {connect} from 'react-redux'
import FilterLink from '../components/FilterLinks';
import {setPurchasedFilter} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.listFilters === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault()
      dispatch(setPurchasedFilter(ownProps.filter))
    }
  }
}

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default FilterLinkContainer;