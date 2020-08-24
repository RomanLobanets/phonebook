// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('task/adRequest');
const addContactSuccess = createAction('task/adSuccess');
const addContactError = createAction('task/adError');

const getContactRequest = createAction('task/getRequest');
const getContactSuccess = createAction('task/getSuccess');
const getContactError = createAction('task/getError');

const removeContactRequest = createAction('task/removeRequest');
const removeContactSuccess = createAction('task/removeSuccess');
const removeContactError = createAction('task/removeError');
// const addContact = createAction('tasks/add', (taskName, taskPhone) => ({
//   payload: {
//     contact: { id: uuidv4(), name: taskName, number: taskPhone },
//   },
// }));

// const addContact = (taskName, taskPhone) => ({
//   type: actionTypes.ADD,
//   payload: {
//     contact: { id: uuidv4(), name: taskName, number: taskPhone },
//   },
// });
const removeTask = createAction('tasks/remove');
// const removeTask = taskid => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     id: taskid,
//   },
// });
const searchContact = createAction('tasks/search');
// const searchContact = filter => ({
//   type: actionTypes.SEARCH,
//   payload: {
//     filter,
//   },
// });

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  removeTask,
  searchContact,
};
