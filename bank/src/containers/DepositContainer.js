import {connect} from 'react-redux';
import Deposit from '../components/Deposit';
import {deposit} from '../actions';
import serialize from 'form-serialize';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: e => {
      e.preventDefault();
      let form = e.target
      let data = serialize(form, {hash: true})
      console.log(data)

      dispatch(deposit({id: ownProps.id, amount: data.depositAmount}));
      form.reset();
    }
  }
}

const DepositContainer = connect(
  null,
  mapDispatchToProps
)(Deposit);

export default DepositContainer;