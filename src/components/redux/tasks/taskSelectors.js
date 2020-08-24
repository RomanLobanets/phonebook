import { createSelector } from '@reduxjs/toolkit';

const onGetContact = state => state.tasks.contacts;

const onGetFilter = state => state.tasks.filter;

const onGetVisiblesTasks = createSelector(
  [onGetContact, onGetFilter],
  (contacts, filter) =>
    contacts.filter(item => item.name.toLowerCase().includes(filter)),
);

// const onGetVisiblesTasks = state => {
//   const contatcts = onGetContact(state);
//   const filter = onGetFilter(state).toLowerCase();
//   return contatcts.filter(item => item.name.toLowerCase().includes(filter));
// };

export default {
  onGetContact,
  onGetFilter,
  onGetVisiblesTasks,
};
