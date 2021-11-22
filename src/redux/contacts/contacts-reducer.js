import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactItems: [], loading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => ({
      ...state,
      contactItems: action.payload,
      loading: false,
      error: null,
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [addContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: [...state.contactItems, action.payload],
      loading: false,
      error: null,
    }),
    [addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: state.contactItems.filter(
        ({ id }) => id !== action.payload,
      ),
      loading: false,
      error: null,
    }),
    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export default contactsSlice.reducer;
