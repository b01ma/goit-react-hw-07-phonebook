import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items } from './contactReducer';
import { filter } from './filterReducer';

const customReducer = combineReducers({
  items,
  filter,
});

export const store = configureStore({
  reducer: {
    contacts: customReducer,
  },
});
