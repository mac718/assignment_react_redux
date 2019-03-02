import {connect} from 'react-redux';
import {PurchaseItem} from '../actions';
import PurchaseUnpurchaseItem from '../components/PurchaseUnpurchaseItem';

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch, id) => {
  return {
    purchaseItem: id => dispatch(purchaseItem(id))
      })

    }
  }
}

// const PurchaseItemContainer = connect(
//   mapDispatchToProps,
//   mapDispatchToProps,
// )(PurchaseUnpurchaseItem)

// export default PurchaseItemContainer;
