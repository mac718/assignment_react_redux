import {connect} from 'react-redux';
import Withdraw from '../components/Withdraw';
import {withdraw} from '../actions';
import serialize from 'form-serialize';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: e => {
      e.preventDefault();
      let form = e.target
      let data = serialize(form, {hash: true})
      console.log(data)

      dispatch(withdraw({id: ownProps.id, amount: data.withdrawAmount}));
      form.reset();
    }
  }
}

const WithdrawContainer = connect(
  null,
  mapDispatchToProps
)(Withdraw);

export default WithdrawContainer;