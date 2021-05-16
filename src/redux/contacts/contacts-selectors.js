import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;

const getFilter = state => state.phonebook.filter;

const getAllContacts = state => state.phonebook.contacts;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
