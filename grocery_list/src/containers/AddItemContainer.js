import {connect} from 'react-redux';
import AddItem from '../components/AddItem';
import {addItem} from '../actions';
import serialize from 'form-serialize';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      let form = e.target
      let data = serialize(form, {hash: true})
      
      dispatch(addItem(data))
      form.reset()
    }
  }
}

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItem)

export default AddItemContainer;