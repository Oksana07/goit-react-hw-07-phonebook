import { changeFilter } from '../contacts/contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
