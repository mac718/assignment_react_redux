import { SELECT_ACCOUNT, DEPOSIT, WITHDRAW } from './actions';


function bank(state = [], action) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return {
        ...state,
        currentAccount: state.accounts.filter(account => {
          if ( account.name === action.data || account.id === action.data ) {
            return account
          }
          return {};
        })[0]
      }
    case DEPOSIT:
      return { accounts: state.accounts.map(account => {
        if (account.accountNo === action.data.id) {
          return {
          ...account,
          balance: account.balance + parseInt(action.data.amount)
          }
        }
        return account
        })}
    case WITHDRAW:
      return { accounts: state.accounts.map(account => {
        if (account.accountNo === action.data.id) {
          return {
          ...account,
          balance: account.balance - parseInt(action.data.amount)
          }
        }
        return account
        })}
    default: 
      return state;
  }
}

export default bank;