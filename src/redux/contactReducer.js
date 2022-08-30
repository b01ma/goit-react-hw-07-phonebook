import { createReducer } from '@reduxjs/toolkit';
import { getContacts } from './contactsOperations';

export const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
});
