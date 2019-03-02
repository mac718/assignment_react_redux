import React from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';

const AddItem = ({onSubmit}) => {
  return(
    <form className='AddItem' onSubmit={onSubmit}>
      <h1>Add Item</h1>
      <InputGroup name='name' labelText='Item'>
        <Input className='form-control' style={{width: '25%', margin: 'auto'}}name='name' />
      </InputGroup>
      <Button type='submit' color='primary'>Add Item to List</Button>
    </form>
  )
}

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddItem;