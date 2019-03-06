import {connect} from 'react-redux';
import Accounts from '../components/Accounts';

const mapStateToProps = state => {
  console.log(state)
  return {
    accounts: state.accounts
  }
}

const AccountsContainer = connect(
  mapStateToProps,
  null
)(Accounts);

export default AccountsContainer;