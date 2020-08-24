import taskActions from './tasks/taskActions';
import axios from 'axios';
const addTask = (name, number) => dispatch => {
  dispatch(taskActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(res => {
      dispatch(taskActions.addContactSuccess(res.data));
    })
    .catch(error => dispatch(taskActions.addContactError(error)));
};

const getTask = () => dispatch => {
  dispatch(taskActions.getContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(taskActions.getContactSuccess(data));
    })
    .catch(error => dispatch(taskActions.getContactError(error)));
};
const removeTask = id => dispatch => {
  dispatch(taskActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(taskActions.removeContactSuccess(id));
    })
    .catch(error => dispatch(taskActions.removeContactError(error)));
};
export default {
  addTask,
  getTask,
  removeTask,
};
