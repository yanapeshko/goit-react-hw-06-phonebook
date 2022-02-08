import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions.js';

const items = createReducer([], {
  [actions.contactsAdd]: (state, { payload }) => {
    const isDuplicate = state.find(contact => contact.name === payload.name);

    if (isDuplicate) {
      alert('Already in the contacts!');
      return state;
    }
    return [{ ...payload }, ...state];
  },
  [actions.contactsDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.contactsFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
