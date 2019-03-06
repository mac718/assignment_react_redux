import React from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';

const Transfer = ({account, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup name='TransferAmount' labelText='Amount:'>
        <Input className='transferAmount' name='transferAmount' />
      </InputGroup>
      <InputGroup name='TransferAccount' labelText='To Account:'>
        <Input className='transferAccount' name='transferAccount' />
      </InputGroup>
      <Button type='submit' color='primary'>Submit</Button>
    </form>
  )
}

export default Transfer;