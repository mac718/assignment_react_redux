import React from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';

const Deposit = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup name='Deposit' labelText='Amount:'>
        <Input className='depositAmount' name='depositAmount' />
      </InputGroup>
      <Button type='submit' color='success'>Submit</Button>
    </form>
  )
}

export default Deposit;