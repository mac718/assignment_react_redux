import React from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';

const Withdraw = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup name='Withdraw' labelText='Amount:'>
        <Input className='withdrawAmount' name='withdrawAmount' />
      </InputGroup>
      <Button type='submit' color='danger'>Submit</Button>
    </form>
  )
}

export default Withdraw;