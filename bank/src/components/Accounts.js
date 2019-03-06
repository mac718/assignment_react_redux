import React from 'react';
import PropTypes from 'prop-types';
import AccountCard from './AccountCard';

const Accounts = ({accounts}) => {
  let accountDivs = accounts.map(account => {
    return <AccountCard key={account.accountNo} account={account} />
  })

  return (
    <div id='Accounts'>
      <ul className='list-group'>{accountDivs}</ul>
    </div>
  )
}

export default Accounts;