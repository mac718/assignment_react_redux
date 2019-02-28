import {connect} from 'react-redux';
import {PurchaseItem} from '../actions';

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (e, id) => {
      e.preventDefault();

      // list.map(item => {
      //   if (item )
      })

    }
  }
}
