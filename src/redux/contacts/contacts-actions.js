import { createAction, nanoid } from '@reduxjs/toolkit';

const contactsAdd = createAction('contacts/add', payload => ({
  payload: { id: nanoid(), ...payload },
}));
const contactsDelete = createAction('contacts/delete');
const contactsFilter = createAction('contacts/filter');

const contactsActions = {
  contactsAdd,
  contactsDelete,
  contactsFilter,
};
export default contactsActions;
