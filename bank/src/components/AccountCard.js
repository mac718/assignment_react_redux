import React from 'react';
import PropTypes from 'prop-types';
import DepositContainer from '../containers/DepositContainer';
import WithdrawContainer from '../containers/WithdrawContainer';
import Transfer from './Transfer';

const AccountCard = ({account}) => {
  let dataTarget = `#${account.thing}`
  console.log(dataTarget)
  return (
   <div className='account'>
      <li className='list-group-item'>
        <div>Account Holder: {account.name}</div>
        <div>Balance: {account.balance}</div>

        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={dataTarget} aria-expanded="false" aria-controls={account.accountNo.toString()}>
          Actions
        </button>
        <div className="collapse" id={account.thing}>
          <div className='Deposit card card-body'>
            <h5>Deposit</h5>
            <DepositContainer id={account.accountNo}/>
          </div>
          <div className='Withdraw card card-body'>
            <h5>Withdraw</h5>
            <WithdrawContainer id={account.accountNo} />
          </div>
          <div className='Transfer card card-body'>
            <h5>Transfer</h5>
            <Transfer />
          </div>
        </div>
      </li>
    </div>
  )
}

export default AccountCard;