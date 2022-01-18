import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import actions from './contacts-actions.js';

const items = createReducer([], {
  [actions.contactsAdd]: (state, { payload }) => {
    return [{ ...payload, id: uuidv4() }, ...state];
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
