import { combineReducers } from 'redux';
import actionTypes from './taskActions';
import { createReducer } from '@reduxjs/toolkit';
import taskActions from './taskActions';

const itemReducer = createReducer([], {
  [taskActions.getContactSuccess]: (state, action) => action.payload,
  [taskActions.removeContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
  [actionTypes.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  // [actionTypes.removeTask]: (state, action) =>
  //   state.filter(item => item.id !== action.payload),
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.addContact.type:
//       return [...state, payload.contact];
//     case actionTypes.removeTask.type:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

const itemFilter = createReducer('', {
  [actionTypes.searchContact]: (state, action) => action.payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.searchContact.type:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts: itemReducer,
  filter: itemFilter,
});

// state = {
//     contacts: [],
//     filter: '',
//     error: false,
//   };
//   componentDidMount() {
//     const persistedTasks = localStorage.getItem('contacts');
//     if (persistedTasks) {
//       this.setState({
//         contacts: JSON.parse(persistedTasks),
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (taskName, taskPhone) => {
//     const contactName = {
//       id: uuidv4(),
//       name: taskName,
//       number: taskPhone,
//     };
//     this.setState(prevState => {
//       if (this.state.contacts.find(item => item.name === contactName.name)) {
//         return {
//           error: !prevState.error,
//           contacts: [...prevState.contacts],
//         };
//       } else {
//         return {
//           contacts: [...prevState.contacts, contactName],
//         };
//       }
//     });
//     setTimeout(() => {
//       this.setState(() => ({ error: false }));
//     }, 3000);
//   };
//   removeTask = taskId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(item => item.id !== taskId),
//       };
//     });
//   };
//   searchContact = event => {
//     let findName = event.target.form[0].value;
//     this.setState(() => {
//       return {
//         filter: findName,
//       };
//     });
//   };
